import styled from "styled-components/native";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

export const ItemCard = styled(Card)`
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const ItemCardCover = styled(Card.Cover)`
	padding: 13px;
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const LeftInfo = styled(View)`
	flex-direction: row;
	align-items: center;
`;
export const RightInfo = styled(View)`
	flex-direction: row;
	align-items: center;
`;

export const Icon = styled(Image)`
	width: 30px;
	height: 30px;
	border-radius: 100px;
	margin-right: ${(props) => props.theme.space[2]};
`;
export const Unavailable = styled(MaterialIcons)`
	font-size: ${(props) => props.theme.fontSizes.button};
	padding-left: ${(props) => props.theme.space[2]};
	color: ${(props) => props.theme.colors.text.error};
`;

export const Address = styled(Text)`
	font-size: ${(props) => props.theme.fontSizes.caption};
	font-family: ${(props) => props.theme.fonts.body};
`;

export const Info = styled(View)`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: ${(props) => props.theme.space[2]};
	padding-top: 11px;
	padding-bottom: 11px;
`;

export const Rating = styled(View)`
	flex-direction: row;
	padding-top: ${(props) => props.theme.space[2]};
	padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Section = styled(View)`
	flex-direction: row;
	align-items: center;
`;

export const SectionEnd = styled(View)`
	flex: 1;
	flex-direction: row;
	justify-content: flex-end;
`;
