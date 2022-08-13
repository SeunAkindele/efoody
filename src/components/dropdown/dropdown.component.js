import React from "react";
import { Select, DropdownContainer } from "./dropdown.component.styles";
 
export const Dropdown = ({data, onValueChange, placeholder, value}) => {
   
    
    return (
        <DropdownContainer>
            <Select
                placeholder={{label: placeholder, value: null}}
                items={data}
                onValueChange={onValueChange}
                value={value}
            />
        </DropdownContainer>
    );
}