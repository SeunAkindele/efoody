import React from "react";
import { Select, DropdownContainer } from "./dropdown.component.styles";
import RNPickerSelect from "react-native-picker-select";
import { Feather } from "@expo/vector-icons";

export const Dropdown = ({ data, onValueChange, placeholder, value }) => {
	return (
		<DropdownContainer>
			<RNPickerSelect
				placeholder={{ label: placeholder, value: null }}
				items={data}
				onValueChange={onValueChange}
				value={value}
				style={Select}
				Icon={() => {
					return <Feather name="chevron-down" color="#138000" size={20} style={{ paddingTop: "9%" }} />;
				}}
			/>
		</DropdownContainer>
	);
};
