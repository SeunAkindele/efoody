import styled from "styled-components/native";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

export const MenuCard = styled(Card)`
	background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const Icon = styled(Image)`
	width: 30px;
	height: 30px;
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

export const MenuCardCover = styled(Card.Cover)`
	padding: 13px;
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled(View)`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: ${(props) => props.theme.space[2]};
	padding-top: 11px;
	padding-bottom: 11px;
`;

export const Available = styled(AntDesign)`
	font-size: ${(props) => props.theme.fontSizes.button};
	padding-left: ${(props) => props.theme.space[2]};
	color: ${(props) => props.theme.colors.text.success};
`;

export const Unavailable = styled(MaterialIcons)`
	font-size: ${(props) => props.theme.fontSizes.button};
	padding-left: ${(props) => props.theme.space[2]};
	color: ${(props) => props.theme.colors.text.error};
`;
