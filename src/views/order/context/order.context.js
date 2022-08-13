import React, { useState, createContext, useContext } from "react";
import { api } from "../../../api/api";
import { strlen } from "../../../components/utility/functions";
import { LoginContext } from "../../account/context/login.context";

export const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
	const { token } = useContext(LoginContext);

	const [order, setOrder] = useState([]);
	const [pastOrder, setPastOrder] = useState([]);
	const [pastOrderBackUp, setPastOrderBackUp] = useState([]);
	const [pending, setPending] = useState([]);
	const [loading, setLoading] = useState(true);

	const payOnDelivery = (deliveryFee, navigation) => {
		const inputs = {
			page: "payOnDelivery",
			delivery: deliveryFee,
		};

		setLoading(true);
		api("order", { request: inputs }, token, (response) => {
			if (response["success"] === true) {
				setLoading(false);
				navigation.goBack();
				navigation.navigate("Order");
			} else {
				alert(response["data"]);
				setLoading(false);
			}
		});
	};

	const payOnline = (deliveryFee, navigation, onlineToken) => {
		const inputs = {
			page: "payOnline",
			delivery: deliveryFee,
			onlineToken: onlineToken,
		};

		setLoading(true);
		api("order", { request: inputs }, token, (response) => {
			if (response["success"] === true) {
				setLoading(false);
				navigation.goBack();
				navigation.navigate("Order");
			} else {
				alert(response["data"]);
				setLoading(false);
			}
		});
	};

	const getOrder = () => {
		const inputs = {
			page: "getOrder",
		};

		api("order", { request: inputs }, token, (response) => {
			if (response["success"] === true) {
				if (response["data"]) {
					if (strlen(response["data"]["data"]) > 0) {
						setOrder(response["data"]["data"]);
						setPending(response["data"]["pending"]);
					} else {
						setOrder(null);
					}
				} else {
					setOrder(null);
				}
				setLoading(false);
			} else {
				alert(response["data"]);
				setLoading(false);
			}
		});
	};

	const getPastOrder = () => {
		const inputs = {
			page: "getPastOrder",
		};
		setLoading(true);
		api("order", { request: inputs }, token, (response) => {
			if (response["success"] === true) {
				if (response["data"]) {
					if (strlen(response["data"]["data"]) > 0) {
						setPastOrder(response["data"]["data"]);
						setPastOrderBackUp(response["data"]["data"]);
					} else {
						setPastOrder(null);
					}
				} else {
					setPastOrder(null);
				}
				setLoading(false);
			} else {
				alert(response["data"]);
				setLoading(false);
			}
		});
	};

	const cancleOrder = (orderToken) => {
		const inputs = {
			page: "cancleOrder",
			token: orderToken,
		};
		setLoading(true);
		api("order", { request: inputs }, token, (response) => {
			if (response["success"] === true) {
				getOrder();
				getPastOrder();
				setLoading(false);
			} else {
				alert(response["data"]);
				setLoading(false);
			}
		});
	};

	const confirmDelivery = (orderToken) => {
		const inputs = {
			page: "confirmDelivery",
			token: orderToken,
		};
		setLoading(true);
		api("order", { request: inputs }, token, (response) => {
			if (response["success"] === true) {
				getOrder();
				getPastOrder();
				setLoading(false);
			} else {
				alert(response["data"]);
				setLoading(false);
			}
		});
	};

	return (
		<OrderContext.Provider
			value={{
				order,
				payOnDelivery,
				payOnline,
				getOrder,
				getPastOrder,
				pastOrder,
				setPastOrder,
				pastOrderBackUp,
				pending,
				loading,
				confirmDelivery,
				cancleOrder,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
};

// "data": Array [
//   Object {
//     "amount": "1000",
//     "customer_address": "iju isaga",
//     "customer_id": "3",
//     "customer_name": "oluwatosin iyapo",
//     "customer_phone": "07063317289",
//     "date": "2022-08-08",
//     "delivery_fee": "1000",
//     "order": Array [
//       Object {
//         "amount": "1000",
//         "id": "20",
//         "item_id": "1",
//         "name": "Asun",
//         "price": "1000",
//         "qty": "1",
//         "status": "2",
//       },
//     ],
//     "pay_type": "offline",
//     "staff_name": null,
//     "status": "2",
//     "token": "PM08082022310",
//     "user_id": null,
//     "vat_value": "0",
//   },
// ],
