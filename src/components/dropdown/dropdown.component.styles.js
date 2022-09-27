import { View } from "react-native";
import styled from "styled-components/native";

export const Select = {
	inputIOS: {
		fontSize: 12,
		paddingTop: 13,
		paddingHorizontal: 10,
		paddingBottom: 6,
		width: "100%",
		textTransform: "capitalize",
		marginTop: 20,
		borderWidth: 0,
		borderBottomWidth: 1,
		borderColor: "#138000",
		color: "black",
	},
	placeholder: {
		color: "#555",
		fontSize: 15,
		paddingBottom: "5%",
	},
	inputAndroid: {
		width: "100%",
		marginTop: 20,
		fontSize: 12,
		paddingHorizontal: 10,
		paddingVertical: 8,
		borderWidth: 0,
		borderBottomWidth: 1,
		borderColor: "#138000",
		textTransform: "capitalize",
		color: "black",
		paddingRight: 30,
	},
};

export const DropdownContainer = styled(View)`
	width: 100%;
`;
