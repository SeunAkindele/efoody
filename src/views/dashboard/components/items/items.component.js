import React from "react";
import {Text} from "../../../../components/typography/text.component";
import { DashboardItems, ItemsProgress, ItemsContainer, Active, Disabled, Details } from "./items.component.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";

export const Items = ({items}) => {
 
  return (
   
    <DashboardItems>
      <Text variant="tag" style={{color: 'grey', alignSelf: 'center'}}>Items</Text>
      <Spacer position="top" size="large" />
      <ItemsProgress progress={items.percentage}/>
      <ItemsContainer>
        <Details>
          <Active name="dot-single" />
          <Text variant="tag" style={{color: 'grey', alignSelf: 'center'}}>{items.active}</Text>
          <Spacer position="right" size="small" />
          <Text variant="small" style={{color: 'grey', alignSelf: 'center'}}>Active ({items.percentage.toFixed(2) * 100}%)</Text>
        </Details>

        <Details>
          <Disabled name="dot-single" />
          <Text variant="tag" style={{color: 'grey', alignSelf: 'center'}}>{items.disabled}</Text>
          <Spacer position="right" size="small" />
          <Text variant="small" style={{color: 'grey', alignSelf: 'center'}}>Disabled</Text>
        </Details>
      </ItemsContainer>
      <Spacer position="bottom" size="large" />
      
    </DashboardItems>
  )
}