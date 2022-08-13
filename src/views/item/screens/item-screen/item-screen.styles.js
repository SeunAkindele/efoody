import styled from "styled-components/native";
import {FlatList, View, TouchableOpacity} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import { Avatar } from "react-native-paper";

export const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const ItemList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})`

`;

export const Arrow = styled(AntDesign)`
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.inverse};
`;


export const ItemManagement = styled(TouchableOpacity)`
  height: 9%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.brand.primary};
  padding: ${(props) => props.theme.space[2]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${(props) => props.bg || props.theme.colors.brand.primary};
`;