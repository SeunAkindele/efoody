import styled from "styled-components/native";
import { View, Image } from "react-native";
import { Card } from "react-native-paper";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export const Trash = styled(AntDesign)`
	font-size: ${(props) => props.theme.fontSizes.button};
	padding-left: ${(props) => props.theme.space[2]};

	color: ${(props) => props.theme.colors.text.error};
`;

export const CustomerOrderCard = styled(Card)``;

export const Info = styled(View)`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: ${(props) => props.theme.space[2]};
	padding-top: ${(props) => props.theme.space[1]};
	padding-bottom: ${(props) => props.theme.space[1]};
`;

export const IconInverse = styled(Ionicons)`
	font-size: 25px;
	color: ${(props) => props.theme.colors.text.disabled};
	border-radius: 100px;
	margin-right: ${(props) => props.theme.space[2]};
`;

export const Icon = styled(Image)`
	width: 25px;
	height: 25px;
	border-radius: 100px;
	margin-right: ${(props) => props.theme.space[2]};
`;

export const LeftInfo = styled(View)`
	flex-direction: row;
	align-items: center;
`;

export const HeaderFooterInfo = styled(View)`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const RightInfo = styled(View)`
	flex-direction: row;
	align-items: center;
`;

export const Check = styled(AntDesign)`
	font-size: ${(props) => props.theme.fontSizes.button};
	padding-left: ${(props) => props.theme.space[3]};
	padding-right: ${(props) => props.theme.space[2]};
	color: ${(props) => props.theme.colors.brand.primary};
`;
