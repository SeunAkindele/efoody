import styled from "styled-components";
import { colors } from "../../../../components/theme/colors";
import { View, Image } from "react-native";
import { Text } from "../../../../components/typography/text.component";
import { Button } from "react-native-paper";

export const AccountBackground = styled.ImageBackground.attrs({
	source: require("../../../../assets/images/efoody_bg.png"),
})`
	flex: 1;
	align-items: center;
	/* justify-content: center; */
`;

export const EfoodyTitle = styled(Image)`
	align-self: center;
	margin-top: 20%;
	margin-bottom: 30%;
`;

export const AccountCover = styled(View)`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled(View)`
	padding: ${({ theme }) => theme.space[4]};
	margin-top: ${({ theme }) => theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
	color: colors.ui.success,
})`
	padding: ${(props) => props.theme.space[2]};
`;

export const Title = styled(Text)`
	font-size: 25px;
`;

export const AnimationWrapper = styled.View`
	width: 90%;
	height: 50%;
	position: absolute;
	bottom: 67%;
`;
