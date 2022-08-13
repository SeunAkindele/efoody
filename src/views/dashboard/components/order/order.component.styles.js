import styled from "styled-components/native";
import { View} from "react-native";
import { Avatar } from "react-native-paper";

export const DashboardOrder = styled(View)`
  width: 100%;
`;


export const OrderIcon = styled(Avatar.Icon).attrs({
  size: 120,
})`
  margin-top: ${(props) => props.theme.space[4]};
  margin-bottom: ${(props) => props.theme.space[4]};
  background-color: #eee;
`;