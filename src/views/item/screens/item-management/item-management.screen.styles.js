import styled from "styled-components";
import { colors } from "../../../../components/theme/colors";
import {View, Image} from "react-native";
import {Button, TextInput} from "react-native-paper";
import{ Text } from "../../../../components/typography/text.component";

export const ItemContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  flex: 1;
`;

export const ItemInput = styled(TextInput)`
  width: 100%;
  background-color: ${({theme}) => theme.colors.bg.secondary};
`;

export const ItemButton = styled(Button).attrs({
  color: colors.brand.primary
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

export const ImageSelector = styled(Image)`
  height: 100px;
  width: 100px;
  border-radius: 100px;
  align-self: center;
`;