import React, { useState, createContext, useContext } from "react";
import { api } from "../../../api/api";
import { checkEmptyInput, ucFirst } from "../../../components/utility/functions";
import { LoginContext } from "../../account/context/login.context";

export const ItemManagementContext = createContext();

export const ItemManagementContextProvider = ({ children }) => {
	const { token } = useContext(LoginContext);
	const [loading, setLoading] = useState(false);

	return (
		<ItemManagementContext.Provider
			value={{
				getItemCategory: () => {
					const arr = [];
					const inputs = {
						page: "getItemCategories",
					};
					setLoading(true);
					api("itemCategory", { request: inputs }, token, (response) => {
						if (response["success"] === true) {
							response["data"].map((item) => arr.push({ label: ucFirst(item.name), value: item.id }));
							setLoading(false);
						} else {
							alert(response["data"]);
							setLoading(false);
						}
					});

					return arr;
				},
				onCreateItemCategory: (navigation, category) => {
					if (checkEmptyInput([category])) {
						alert("Item category cannot be empty");
						return false;
					}

					const inputs = {
						page: "createItemCategory",
						name: category,
					};

					setLoading(true);
					api("itemCategory", { request: inputs }, token, (response) => {
						if (response["success"] === true) {
							setLoading(false);
							alert(response["data"]);
							navigation.goBack();
						} else {
							alert(response["data"]);
							setLoading(false);
						}
					});
				},
				onCreateItem: (navigation, localUri, data, type) => {
					const inputs = data.split("_");
					const image = inputs[0];
					const forms = inputs[1].split("-");
					const name = forms[1];
					const price = forms[2];
					const categoryId = forms[4];

					if (checkEmptyInput([name, price, categoryId])) {
						alert("None of the asterisked fields must be empty");
						return false;
					}

					if (image === "camera.png") {
						alert("Image cannot be empty");
						return false;
					}

					const formData = new FormData();
					formData.append("image", { uri: localUri, name: data, type });

					setLoading(true);
					api(
						"item",
						formData,
						token,
						(response) => {
							if (response["success"] === true) {
								setLoading(false);
								alert(response["data"]);
								navigation.goBack();
							} else {
								alert(response["data"]);
								setLoading(false);
							}
						},
						"multipart/form-data",
					);
				},
				loading,
			}}
		>
			{children}
		</ItemManagementContext.Provider>
	);
};
