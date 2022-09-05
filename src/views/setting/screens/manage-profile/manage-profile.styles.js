import styled from "styled-components";
import { colors } from "../../../../components/theme/colors";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export const ProfileContainer = styled.ImageBackground.attrs({
	source: require("../../../../assets/images/efoody_footer.png"),
})`
	padding: ${(props) => props.theme.space[3]};
	flex: 1;
`;

export const ProfileInput = styled(TextInput)`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.ui.quaternary};
`;

export const ProfileButton = styled(Button).attrs({
	color: colors.brand.primary,
})`
	padding: ${(props) => props.theme.space[2]};
	background-color: ${({ theme }) => theme.colors.ui.success};
`;
