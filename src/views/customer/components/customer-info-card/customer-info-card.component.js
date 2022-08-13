import React, { useContext } from "react";
import {Alert} from 'react-native';
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import { ucWord } from "../../../../components/utility/functions";
import { CustomerContext } from "../../context/customer.context";
import {CustomerCard, Info, LeftInfo, RightInfo, Phone, User, Trash, Check} from "./customer-info-card.styles";

export const CustomerInfoCard = ({ customer: {name, id, phone, disabled_status}, authorization, loadCustomer }) => {
  
  const {enableCustomer, disableCustomer} = useContext(CustomerContext);

  return (
    <>
      <CustomerCard elevation={5} key={id}>
        <Info>
          <LeftInfo>
          {!loadCustomer && <User name="user-circle-o" />}
            <Text variant="tag">{!loadCustomer ? ucWord(name) : '---'}</Text>
            <Spacer position="left" size="large">
              {!loadCustomer && <Phone name="phone-square" />}
            </Spacer>
            <Text variant="tag">{!loadCustomer ? phone : '-----'}</Text>
          </LeftInfo>
          <RightInfo>
            {authorization == "2" &&  
            (disabled_status == "1" ? !loadCustomer ? <Check onPress={() => {
              Alert.alert(
                "Enable Customer",
                "Are you sure?",
                [
                  {
                    text: "Cancel",
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => enableCustomer(id)}
                ],
                { cancelable: false }
              );
              
            }} name="checkcircle" /> : <Text>-----</Text> : !loadCustomer ? <Trash onPress={() => {
              Alert.alert(
                "Disable Customer",
                "Are you sure?",
                [
                  {
                    text: "Cancel",
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => disableCustomer(id)}
                ],
                { cancelable: false }
              );
            }} name="closecircle" /> : <Text>---</Text>) }
          </RightInfo>
        </Info>
      </CustomerCard>
      <Spacer position="top" size="large" />
    </>
  );
}