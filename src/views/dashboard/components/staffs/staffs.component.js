import React from "react";
import {Text} from "../../../../components/typography/text.component";
import {  DashboardStaffs, StaffProgress, StaffContainer, Active, Disabled, Details } from "./staffs.component.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";

export const Staffs = ({staffs}) => {
 
  return (
   
    <DashboardStaffs>
      <Text variant="tag" style={{color: 'grey', alignSelf: 'center'}}>Staffs</Text>
      <Spacer position="top" size="large" />
      <StaffProgress progress={staffs.percentage}/>
      <StaffContainer>
        <Details>
          <Active name="user-circle-o" />
          <Text variant="tag" style={{color: 'grey', alignSelf: 'center'}}>{staffs.active}</Text>
          <Spacer position="right" size="small" />
          <Text variant="small" style={{color: 'grey', alignSelf: 'center'}}>Active ({staffs.percentage.toFixed(2) * 100}%)</Text>
        </Details>

        <Details>
          <Disabled name="user-circle-o" />
          <Text variant="tag" style={{color: 'grey', alignSelf: 'center'}}>{staffs.disabled}</Text>
          <Spacer position="right" size="small" />
          <Text variant="small" style={{color: 'grey', alignSelf: 'center'}}>Disabled</Text>
        </Details>
      </StaffContainer>
      <Spacer position="bottom" size="large" />
      
    </DashboardStaffs>
  )
}