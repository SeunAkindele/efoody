import styled from "styled-components/native";
import { View, Image} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export const DashboardMostSold = styled(View)`
  width: 100%;
`;

export const MostSoldContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  padding-left: ${(props) => props.theme.space[1]};
  padding-right: ${(props) => props.theme.space[1]};
  justify-content: space-between;
`;

export const MostSoldInnerContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Image)`
  width: 45px;
  height: 45px;
  border-radius: 100px;
  margin-right: ${(props) => props.theme.space[2]};
`;

export const IconInverse = styled(Ionicons)`
  font-size: 50px;
  color: ${(props) => props.theme.colors.text.disabled};
  border-radius: 100px;
  margin-right: ${(props) => props.theme.space[2]};
`;