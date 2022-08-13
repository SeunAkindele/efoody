import styled from "styled-components/native";
import {View, TouchableOpacity, FlatList} from "react-native";
import { Avatar } from "react-native-paper";

export const OrderContainer = styled(View)`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const OrderIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${(props) => props.bg || props.theme.colors.brand.primary};
`;

export const OrderList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})`

`;

export const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;