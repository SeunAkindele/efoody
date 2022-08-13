import styled from "styled-components/native";
import { View } from "react-native";
import {ProgressBar} from "react-native-paper";
import { colors } from "../../../../components/theme/colors";
import {Entypo} from "@expo/vector-icons";

export const DashboardItems = styled(View)`
  width: 100%;
`;

export const ItemsProgress = styled(ProgressBar).attrs({
  color: colors.text.success,
  
})`
  background-color: pink;
  
`;

export const Details = styled(View)`
flex-direction: row;
  justify-content: space-between;
`;

export const ItemsContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${(props) => props.theme.space[2]};
`;

export const Active = styled(Entypo)`
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.brand.primary};
`;

export const Disabled = styled(Entypo)`
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.ui.error};
`;