import styled from "styled-components/native";
import {View, TouchableOpacity} from "react-native";

export const CustomerOrderSummaryContainer = styled(View)`
  margin: ${(props) => props.theme.space[4]};
  flex: 1;
`;

export const CustomerOrderSummaryWrapper = styled(View)`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.space[3]};
`;

export const CustomerOrderSummaryList = styled(View)`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[3]};
`;

export const CustomerOrderSummaryTotal = styled(View)`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 50px;
  background-color: ${(props) => props.theme.colors.ui.disabled};
  padding: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[3]};
`;

export const Dispatch = styled(TouchableOpacity)`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  height: 50px;
  background-color: ${(props) => props.theme.colors.ui.success};
  padding: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[3]};
`;