import styled from "styled-components/native";
import {View} from "react-native";

export const Underline = styled(View)`
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.ui.disabled};
`;