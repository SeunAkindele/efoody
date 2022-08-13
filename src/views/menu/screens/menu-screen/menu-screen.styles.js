import styled from "styled-components/native";
import { FlatList, View, Pressable, Text } from "react-native";
import { Avatar } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

export const SearchContainer = styled(View)`
	padding: ${(props) => props.theme.space[3]};
	z-index: -10;
`;

export const MenuList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16,
	},
})``;

export const MenuIcon = styled(Avatar.Icon).attrs({
	size: 128,
})`
	background-color: ${(props) => props.bg || props.theme.colors.brand.primary};
`;

export const Cart = styled(AntDesign)`
	font-size: ${(props) => props.theme.fontSizes.h5};
	position: absolute;
	top: 8%;
	align-self: flex-end;
	right: 30px;
	color: ${(props) => props.theme.colors.ui.error};
	/* z-index: 100; */
`;

export const CartCount = styled(Pressable)`
	position: absolute;
	border-radius: 100px;
	height: 20px;
	width: 20px;
	padding: ${(props) => props.theme.space[1]};
	top: 7%;
	align-items: center;
	justify-content: center;
	align-self: flex-end;
	right: 20px;
	background-color: ${(props) => props.theme.colors.brand.primary};
`;

export const CartCountText = styled(Text)`
	font-size: 10px;
	align-self: center;
	color: ${(props) => props.theme.colors.text.inverse};
`;
