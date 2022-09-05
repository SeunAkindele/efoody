import styled from "styled-components";
import { colors } from "../../../../components/theme/colors";
import { View, Image, TouchableOpacity } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Text } from "../../../../components/typography/text.component";

export const LoginBackground = styled.ImageBackground.attrs({
	source: require("../../../../assets/images/efoody_footer.png"),
})`
	flex: 1;
	align-items: center;
	/* justify-content: center; */
`;

export const FooterActions = styled(TouchableOpacity)`
	flex-direction: row;
	align-items: center;
`;

export const LoginFooter = styled(View)`
	flex-direction: row;
	width: 80%;
	justify-content: space-between;
`;

export const EfoodyTitle = styled(Image)`
	align-self: center;
	margin-top: 20%;
`;

export const LoginContainer = styled(View)`
	padding: ${({ theme }) => theme.space[4]};
	margin-top: 10%;
`;

export const AuthInput = styled(TextInput)`
	width: 300px;
	background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const AuthButton = styled(Button).attrs({
	color: colors.brand.primary,
})`
	padding: ${(props) => props.theme.space[2]};
	background-color: ${({ theme }) => theme.colors.ui.success};
`;

export const Title = styled(Text)`
	font-size: 25px;
`;

export const ErrorContainer = styled(View)`
	max-width: 300px;
	align-items: center;
	align-self: center;
	margin-top: ${(props) => props.theme.space[2]};
	margin-bottom: ${(props) => props.theme.space[2]};
`;
