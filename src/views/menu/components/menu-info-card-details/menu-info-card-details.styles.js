import styled from "styled-components/native";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

export const MenuCard = styled(Card)`
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const MenuCardCover = styled(Card.Cover)`
	padding: 13px;
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Address = styled(Text)`
	font-size: ${(props) => props.theme.fontSizes.caption};
	font-family: ${(props) => props.theme.fonts.body};
`;

export const Info = styled(View)`
	padding: ${(props) => props.theme.space[3]};
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

export const Icon = styled(Image)`
	width: 15px;
	height: 15px;
`;

export const Available = styled(AntDesign)`
	font-size: ${(props) => props.theme.fontSizes.body};

	padding-left: ${(props) => props.theme.space[2]};
	color: ${(props) => props.theme.colors.text.success};
`;

export const Unavailable = styled(MaterialIcons)`
	font-size: ${(props) => props.theme.fontSizes.body};

	padding-left: ${(props) => props.theme.space[2]};
	color: ${(props) => props.theme.colors.text.error};
`;
