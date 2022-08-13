import styled from "styled-components/native";
import { View, FlatList} from "react-native";
import { Card } from "react-native-paper";

export const DashboardContainer = styled(FlatList)`
  
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const DashboardCardCover = styled(Card)`
  padding: 10px;
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[2]};
`
