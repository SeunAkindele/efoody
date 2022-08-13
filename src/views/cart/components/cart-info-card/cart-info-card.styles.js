import styled from "styled-components/native";
import { View, Image } from "react-native";
import { Card } from "react-native-paper";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export const ArrowLeft = styled(AntDesign)`
	color: ${(props) => props.theme.colors.text.error};
	padding: ${(props) => props.theme.space[2]};
`;

export const ArrowRight = styled(AntDesign)`
	color: ${(props) => props.theme.colors.text.success};
	padding: ${(props) => props.theme.space[2]};
`;

export const Trash = styled(AntDesign)`
	font-size: ${(props) => props.theme.fontSizes.button};

	padding: ${(props) => props.theme.space[2]};
	color: ${(props) => props.theme.colors.text.error};
`;

export const CartCard = styled(Card)`
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled(View)`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: ${(props) => props.theme.space[2]};
`;

export const IconInverse = styled(Ionicons)`
	font-size: 30px;
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

export const RightInfo = styled(View)`
	flex-direction: row;
	align-items: center;
`;
