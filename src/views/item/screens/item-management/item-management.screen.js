import React, { useContext, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { ItemInput, ItemButton, ImageSelector, ItemContainer } from "./item-management.screen.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import { IsLoading } from "../../../../components/loading/loading.component";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { ItemManagementContext } from "../../context/item-management.context";
import { Dropdown } from "../../../../components/dropdown/dropdown.component";

export const ItemManagementScreen = ({ navigation }) => {
	const { onCreateItem, loading, onCreateItemCategory, getItemCategory } = useContext(ItemManagementContext);

	const [photo, setPhoto] = useState(null);
	const [category, setCategory] = useState("");
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [ingredients, setIngredients] = useState("");
	const [itemCategories, setItemCategories] = useState([]);
	const [categoryId, setCategoryId] = useState("");
	const [vatStatus, setVatStatus] = useState(0);

	useFocusEffect(
		React.useCallback(() => {
			const arr = getItemCategory();
			setItemCategories(arr);
		}, []),
	);

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			aspect: [4, 3],
		});

		if (!result.cancelled) {
			setPhoto(result.uri);
		}
	};

	let filename = "";
	let localUri = "";
	let type = "";

	if (photo != null) {
		localUri = photo;
		filename = localUri.split("/").pop();
		let match = /\.(\w+)$/.exec(filename);
		type = match ? `image/${match[1]}` : `image`;
	} else {
		localUri = "";
		filename = "camera.png";
		type = "image/jpg";
	}

	const vat = [
		{ label: "Enable", value: 1 },
		{ label: "Disable", value: 0 },
	];

	return (
		<SafeArea>
			<IsLoading loading={loading} />
			<ItemContainer>
				<Spacer size="large">
					<ItemInput label="Item Category" autoCapitalize="none" onChangeText={(name) => setCategory(name)} />
				</Spacer>
				<Spacer size="large">
					<ItemButton mode="contained" disabled={loading && true} onPress={() => onCreateItemCategory(navigation, category)}>
						{loading ? "Loading..." : "Create Item Category"}
					</ItemButton>
				</Spacer>
				<ScrollView>
					<Spacer size="large">
						<Dropdown data={itemCategories} onValueChange={(item) => setCategoryId(item)} placeholder="Select Item Category *" />
					</Spacer>
					<Spacer size="large">
						<ItemInput label="Item name *" autoCapitalize="none" onChangeText={(name) => setName(name)} />
					</Spacer>

					<Spacer size="large">
						<ItemInput label="Item Price *" autoCapitalize="none" onChangeText={(price) => setPrice(price)} />
					</Spacer>

					<Spacer size="large">
						<ItemInput label="Item Ingredients *" multiline={true} numberOfLines={5} style={{ height: 150 }} autoCapitalize="none" onChangeText={(ingredients) => setIngredients(ingredients)} />
					</Spacer>

					<Spacer size="large">
						<TouchableOpacity onPress={pickImage}>{photo !== null ? <ImageSelector source={{ uri: photo }} /> : <ImageSelector source={require("../../../../assets/images/camera.png")} />}</TouchableOpacity>
						<Spacer position="bottom" size="large" />
						<Text style={{ alignSelf: "center" }} variant="caption">
							Click image to add picture
						</Text>
					</Spacer>
					<Spacer size="large">
						<Dropdown data={vat} onValueChange={(item) => setVatStatus(item)} placeholder="Vat Status" />
					</Spacer>
					<Spacer size="large">
						<ItemButton mode="contained" disabled={loading && true} onPress={() => onCreateItem(navigation, localUri, `${filename}_createItem-${name}-${price}-${ingredients}-${categoryId}-${vatStatus}`, type)}>
							{loading ? "Loading..." : "Create Item"}
						</ItemButton>
					</Spacer>
				</ScrollView>
			</ItemContainer>
		</SafeArea>
	);
};
