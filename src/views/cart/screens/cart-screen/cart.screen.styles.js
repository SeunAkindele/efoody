import styled from "styled-components/native";
import {View, TouchableOpacity, FlatList} from "react-native";
import { Avatar } from "react-native-paper";
import {AntDesign} from "@expo/vector-icons";

export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${(props) => props.bg || props.theme.colors.brand.primary};
`;

export const CartList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})`

`;

export const CartCallToAction = styled(TouchableOpacity)`
  height: 9%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.ui.success};
  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.colors.ui.disabled};
  padding: ${(props) => props.theme.space[2]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Arrow = styled(AntDesign)`
  font-size: ${(props) => props.theme.fontSizes.body};;
  color: ${(props) => props.theme.colors.text.inverse};
`;