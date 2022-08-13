import {View} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";

export const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
`;
