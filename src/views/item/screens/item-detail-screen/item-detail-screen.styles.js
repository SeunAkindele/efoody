import styled from "styled-components/native";
import {Button, ProgressBar, TextInput} from "react-native-paper";
import {View, Image} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import { colors } from "../../../../components/theme/colors";

export const OrderButton = styled(Button).attrs({
  color: colors.brand.primary
})`
  padding: ${(props) => props.theme.space[2]};
  width: 90%;
  align-self: center;
`;

export const DisableButton = styled(Button).attrs({
  color: colors.ui.error
})`
  padding: ${(props) => props.theme.space[2]};
  width: 90%;
  align-self: center;
`;

export const EnableButton = styled(Button).attrs({
  color: colors.ui.success
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
  justify-content: space-between;
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

export const ItemInput = styled(TextInput)`
  width: 95%;
  background-color: ${({theme}) => theme.colors.bg.primary};
`;

export const Trash = styled(AntDesign)`
  font-size: ${(props) => props.theme.fontSizes.body};

  padding: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.text.error};
`;

export const ImageSelector = styled(Image)`
  height: 100px;
  width: 100px;
  border-radius: 100px;
  align-self: center;
`;