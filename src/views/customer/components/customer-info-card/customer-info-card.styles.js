import styled from "styled-components/native";
import {View} from "react-native";
import { Card } from "react-native-paper";
import {AntDesign, FontAwesome} from "@expo/vector-icons";

export const Phone = styled(FontAwesome)`
  font-size: ${(props) => props.theme.fontSizes.body};

  padding: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.text.success};
`;

export const CustomerCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.space[2]};
`;

export const LeftInfo = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const RightInfo = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const User = styled(FontAwesome)`
  font-size: ${(props) => props.theme.fontSizes.body};

  padding: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.brand.primary};
`;

export const Trash = styled(AntDesign)`
  font-size: ${(props) => props.theme.fontSizes.body};

  padding: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.text.error};
`;

export const Check = styled(AntDesign)`
  font-size: ${(props) => props.theme.fontSizes.body};

  padding: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.text.success};
`;