import styled from "styled-components/native";
import {View, TouchableOpacity, FlatList} from "react-native";
import { Avatar } from "react-native-paper";
import {AntDesign, Ionicons} from "@expo/vector-icons";
import { ProgressBar } from 'react-native-paper';
import {colors} from "../../../../components/theme/colors";

export const Progress = styled(ProgressBar).attrs({
  color: colors.text.success
})`
  height: ${(props) => props.theme.space[2]};
`;

export const StaffOrderContainer = styled(View)`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const StaffOrderIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${(props) => props.bg || props.theme.colors.brand.primary};
`;


export const StaffOrderList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})`

`;

export const StaffOrderHistory = styled(TouchableOpacity)`
  height: 9%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.brand.primary};
  padding: ${(props) => props.theme.space[2]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Arrow = styled(AntDesign)`
  font-size: ${(props) => props.theme.fontSizes.body};;
  color: ${(props) => props.theme.colors.text.inverse};
`;


export const Refresh = styled(Ionicons)`
  font-size: ${(props) => props.theme.fontSizes.h3};
  position: absolute;
  bottom: 70px;
  align-self: flex-end;
  right: 10px;
  color: ${(props) => props.theme.colors.text.success};
`;

export const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;