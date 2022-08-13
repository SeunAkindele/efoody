import styled from "styled-components/native";
import {View} from "react-native";

export const OrderSummaryContainer = styled(View)`
  margin: ${(props) => props.theme.space[4]};
  flex: 1;
`;

export const OrderSummaryWrapper = styled(View)`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.space[3]};
`;

export const OrderSummaryList = styled(View)`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[3]};
`;

export const OrderSummaryTotal = styled(View)`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 50px;
  background-color: ${(props) => props.theme.colors.ui.disabled};
  padding: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[3]};
`;