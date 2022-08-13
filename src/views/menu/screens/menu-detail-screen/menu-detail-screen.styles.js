import styled from "styled-components/native";
import {Button, ProgressBar} from "react-native-paper";
import {View} from "react-native";
import { colors } from "../../../../components/theme/colors";

export const OrderButton = styled(Button).attrs({
  color: colors.brand.primary
})`
  padding: ${(props) => props.theme.space[2]};
  width: 90%;
  align-self: center;
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const RatesProgress = styled(View)`
  flex-direction: row;
  align-items: center;
  width: 97%;
`;

export const Progress = styled(ProgressBar).attrs({
  color: colors.text.success
})`
  margin-left: ${(props) => props.theme.space[2]};
  height: 8px;
  max-width: 95%;
  border-radius: 100px;
`;