import styled from "styled-components";
import { colors } from "../../../../components/theme/colors";
import {View} from "react-native";
import {Button, TextInput} from "react-native-paper";
import{ Text } from "../../../../components/typography/text.component";

export const LoginBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/images/home_bg.jpeg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LoginCover = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const LoginContainer = styled(View)`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${({theme}) => theme.space[4]};
  margin-top: ${({theme}) => theme.space[2]};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
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