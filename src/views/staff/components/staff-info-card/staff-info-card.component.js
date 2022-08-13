import React, { useContext } from "react";
import {Alert} from 'react-native';
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import { ucWord } from "../../../../components/utility/functions";
import { StaffContext } from "../../context/staff.context";
import {StaffCard, Info, LeftInfo, Phone, User, RightInfo, Trash, Check} from "./staff-info-card.styles";

export const StaffInfoCard = ({ staff: {name, id, phone, disabled_status}, loadStaff} ) => {

  const {enableStaff, disableStaff} = useContext(StaffContext);

  return (
    <>
      <StaffCard elevation={5} key={id}>
      <Info>
          <LeftInfo>
          {!loadStaff && <User name="user-circle-o" />}
            <Text variant="tag">{!loadStaff ? ucWord(name) : '---'}</Text>
            <Spacer position="left" size="large">
              {!loadStaff && <Phone name="phone-square" />}
            </Spacer>
            <Text variant="tag">{!loadStaff ? phone : '-----'}</Text>
          </LeftInfo>
          <RightInfo>
            {
            (disabled_status == "1" ? !loadStaff ? <Check onPress={() => {
              Alert.alert(
                "Enable Staff",
                "Are you sure?",
                [
                  {
                    text: "Cancel",
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => enableStaff(id)}
                ],
                { cancelable: false }
              );
              
            }} name="checkcircle" /> : <Text>-----</Text> : !loadStaff ? <Trash onPress={() => {
              Alert.alert(
                "Disable Staff",
                "Are you sure?",
                [
                  {
                    text: "Cancel",
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => disableStaff(id)}
                ],
                { cancelable: false }
              );
            }} name="closecircle" /> : <Text>---</Text>) }
          </RightInfo>
        </Info>
      </StaffCard>
      <Spacer position="top" size="large" />
     
    </>
  );
}