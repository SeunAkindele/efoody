import styled from "styled-components/native";
import { View } from "react-native";
import {ProgressBar} from "react-native-paper";
import { colors } from "../../../../components/theme/colors";
import {FontAwesome} from "@expo/vector-icons";

export const DashboardStaffs = styled(View)`
  width: 100%;
`;

export const StaffProgress = styled(ProgressBar).attrs({
  color: colors.text.success,
  
})`
  background-color: pink;
  
`;

export const Details = styled(View)`
flex-direction: row;
  justify-content: space-between;
`;

export const StaffContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${(props) => props.theme.space[2]};
`;

export const Active = styled(FontAwesome)`
  font-size: ${(props) => props.theme.fontSizes.body};
  padding-right: ${(props) => props.theme.space[1]};
  color: ${(props) => props.theme.colors.brand.primary};
`;

export const Disabled = styled(FontAwesome)`
  font-size: ${(props) => props.theme.fontSizes.body};
  padding-right: ${(props) => props.theme.space[1]};
  color: ${(props) => props.theme.colors.ui.error};
`;