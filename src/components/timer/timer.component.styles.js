import styled from "styled-components/native";
import { ProgressBar } from 'react-native-paper';
import {colors} from "../theme/colors";

export const Progress = styled(ProgressBar).attrs({
  color: colors.text.success
})`
  height: ${(props) => props.theme.space[2]};
`;