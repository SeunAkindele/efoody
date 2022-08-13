import styled from "styled-components/native";
import {View, TouchableOpacity, FlatList} from "react-native";
import { Avatar } from "react-native-paper";
import {AntDesign} from "@expo/vector-icons";

export const CartSummaryContainer = styled(View)`
  margin: ${(props) => props.theme.space[4]};
  flex: 1;
`;

export const CartSummaryWrapper = styled(View)`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.space[3]};
`;

export const CartSummaryList = styled(View)`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[3]};
`;

export const CartSummaryTotal = styled(View)`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 50px;
  background-color: ${(props) => props.theme.colors.ui.disabled};
  padding: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[3]};
`;

export const CartSummarySubTotal = styled(View)`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 40px;
  background-color: ${(props) => props.theme.colors.ui.disabled};
  padding: ${(props) => props.theme.space[2]};
`;

export const Online = styled(TouchableOpacity)`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  height: 50px;
  background-color: ${(props) => props.theme.colors.ui.success};
  padding: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[3]};
`;

export const Offline = styled(TouchableOpacity)`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  
  height: 50px;
  background-color: ${(props) => props.theme.colors.brand.primary};
  padding: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[3]};
`;