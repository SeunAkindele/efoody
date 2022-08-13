import styled from "styled-components/native";
import {View, Image} from "react-native";
import { Card } from "react-native-paper";
import {AntDesign} from "@expo/vector-icons";

export const Eye = styled(AntDesign)`
  font-size: ${(props) => props.theme.fontSizes.body};

  padding: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.text.disabled};
`;

export const StaffOrderCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.space[2]};
`;

export const Icon = styled(Image)`
  width: 45px;
  height: 45px;
  border-radius: 100px;
  margin-right: ${(props) => props.theme.space[2]};
`;

export const LeftInfo = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const RightInfo = styled(View)`
  flex-direction: row;
  align-items: center;
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
