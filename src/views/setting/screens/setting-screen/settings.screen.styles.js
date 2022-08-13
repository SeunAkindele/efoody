import styled from "styled-components/native";
import {View, TouchableOpacity} from "react-native";
import { List } from 'react-native-paper';
import {AntDesign} from "@expo/vector-icons";

export const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

export const ProfileManagement = styled(TouchableOpacity)`
height: 9%;
width: 100%;
background-color: ${(props) => props.theme.colors.brand.primary};
padding: ${(props) => props.theme.space[2]};
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

export const AvatarContainer = styled(View)`
  align-items: center;
`;

export const Arrow = styled(AntDesign)`
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.inverse};
`;