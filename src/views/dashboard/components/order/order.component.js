import React, {useState} from "react";
import {View} from "react-native";
import {Text} from "../../../../components/typography/text.component";
import { PieChart } from "react-native-chart-kit";
import { Rect, Text as TextSVG, Svg } from "react-native-svg";
import {  DashboardOrder, OrderIcon } from "./order.component.styles";
import { ErrorContainer } from "../../../../components/utility/error.component.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";


export const Order = ({orderStatusData}) => {
  const data = [
    {
      name: "Pending",
      population: orderStatusData.pending,
      color: "orange",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12
    },
    {
      name: "Cancled",
      population: orderStatusData.cancled,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12
    },
    {
      name: "Delivered",
      population: orderStatusData.delivered,
      color: "green",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12
    },
    {
      name: "Dispatched",
      population: orderStatusData.dispatched,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12
    },
    
  ];


  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  return (
   
    <DashboardOrder>
      <Text variant="tag" style={{color: 'grey', alignSelf: 'center'}}>Order Status Today</Text>
      <Spacer position="top" size="large" />
      {
        orderStatusData.total > 0
        ?
        <PieChart
          data={data}
          width={315}
          height={220}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          // center={[10, 50]}
          absolute
        />
        :
        <ErrorContainer>
          <OrderIcon color="tomato" icon="cart-off" />
          <Text variant="tag">No orders yet</Text>
        </ErrorContainer> 
      }
      <Spacer position="bottom" size="large" />
      
    </DashboardOrder>
  )
}