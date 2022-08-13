import styled from "styled-components";
import { colors } from "../../../../components/theme/colors";
import {View} from "react-native";
import{ Text } from "../../../../components/typography/text.component";
import {Button} from "react-native-paper";


export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/images/home_bg.jpeg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled(View)`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${({theme}) => theme.space[4]};
  margin-top: ${({theme}) => theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
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