import {View} from "react-native";
import styled from "styled-components/native";
import RNPickerSelect from 'react-native-picker-select'; 

export const Select = styled(RNPickerSelect).attrs({
  style: {
    inputIOS: {
      fontSize: 12,
      paddingTop: 13,
      paddingHorizontal: 10,
      paddingBottom: 6,
      width: "90%",
      textTransform: 'capitalize',
      marginTop: 20,
      color: 'black',
    },
    placeholder: {
      color: 'black',
    },
    inputAndroid: {
      width: "90%",
      marginTop: 20,
      fontSize: 12,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 3,
      textTransform: 'capitalize',
      borderColor: 'grey',
      color: 'black',
      paddingRight: 30, 
    },
  }
})`

`;

export const DropdownContainer = styled(View)`
  width: 100%;
  padding: ${(props) => props.theme.space[2]};
  padding-top: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[3]};
`;
