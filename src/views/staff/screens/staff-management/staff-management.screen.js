import React, { useContext, useState, useEffect } from "react";
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { StaffContext } from "../../context/staff.context";
import { StaffInput, StaffButton, Select, StaffContainer } from "./staff-management.screen.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Dropdown } from "../../../../components/dropdown/dropdown.component";
import { Text } from "../../../../components/typography/text.component";
import {TextInput} from "react-native-paper";
import { IsLoading } from "../../../../components/loading/loading.component";

export const StaffManagementScreen = ({ navigation }) => {
  const { loading, createStaff, getLocations, locations } = useContext(StaffContext);

  const [type, setType] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const position = [
    {
      label: "Sales",
      value: "1",
    },
    {
      label: "Admin",
      value: "2",
    }
  ];

  useEffect(() => getLocations(), []);
  
  return (
    <SafeArea>
      <IsLoading loading={loading} />
      <StaffContainer>
      <Spacer size="large">
        <StaffInput
          label="Staff name *"
          autoCapitalize="none"
          onChangeText={(u) => setName(u)}
        />
      </Spacer>

      <Spacer size="large">
        <StaffInput
          label="E-mail *"
          textContentType="emailAddress"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
      </Spacer>

      <Spacer size="large">
        <StaffInput
          label="Phone number *"
          keyboardType="tel"
          autoCapitalize="none"
          onChangeText={(u) => setPhone(u)}
        />
      </Spacer>

      <Spacer size="large">
      <Dropdown
          data={locations} onValueChange={ item => setLocation(item)} placeholder='Select Location *'
        />
        </Spacer>
        <Spacer size="large">
        <Dropdown
          data={position} onValueChange={ item => setType(item)} placeholder='Select Position *'
        />
      </Spacer>
     
      <Spacer size="large">
        <StaffButton
          mode="contained"
          onPress={() => createStaff(name, email, phone, type, location, navigation)}
        >
          Create Staff
        </StaffButton>
      </Spacer>
      </StaffContainer>
    </SafeArea>
  );
};