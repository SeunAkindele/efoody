import React from "react";
import {Text} from "../../../../components/typography/text.component";
import {  DashboardCustomers, CustomerProgress, CustomerContainer, Active, Disabled, Details } from "./customers.component.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";

export const Customers = ({customers}) => {
 
  return (
   
    <DashboardCustomers>
      <Text variant="tag" style={{color: 'grey', alignSelf: 'center'}}>Customers</Text>
      <Spacer position="top" size="large" />
      <CustomerProgress progress={customers.percentage}/>
      <CustomerContainer>
        <Details>
          <Active name="user-circle-o" />
          <Text variant="tag" style={{color: 'grey', alignSelf: 'center'}}>{customers.active}</Text>
          <Spacer position="right" size="small" />
          <Text variant="small" style={{color: 'grey', alignSelf: 'center'}}>Active ({customers.percentage.toFixed(2) * 100}%)</Text>
        </Details>

        <Details>
          <Disabled name="user-circle-o" />
          <Text variant="tag" style={{color: 'grey', alignSelf: 'center'}}>{customers.disabled}</Text>
          <Spacer position="right" size="small" />
          <Text variant="small" style={{color: 'grey', alignSelf: 'center'}}>Disabled</Text>
        </Details>
      </CustomerContainer>
      <Spacer position="bottom" size="large" />
      
    </DashboardCustomers>
  )
}