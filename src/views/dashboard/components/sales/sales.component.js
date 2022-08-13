import React, {useState} from "react";
import {View} from "react-native";
import { LineChart } from "react-native-chart-kit";
import {  DashboardSales } from "./sales.component.styles";
import { Rect, Text as TextSVG, Svg } from "react-native-svg";

export const Sales = ({salesData}) => {
  let [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, visible: false, value: 0 });

  const chartConfig = {
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    propsForBackgroundLines:{
        strokeWidth: 0
    },
    color: (opacity = 1) => 'grey'
};

  const data = {
    labels: ["Today", "1d", "2ds", "3ds", "4ds", "5ds", "6ds"],
    datasets: [
      {
        data: salesData,
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Sales Analysis (Last 7 days)"] // optional
  };

  return (
   
    <DashboardSales>
      <LineChart
        data={data}
        width={330}
        height={230}
        chartConfig={chartConfig}
        bezier
        decorator={() => {
          return tooltipPos.visible 
          ? 
          <View>
              <Svg>
                  <Rect 
                      x={tooltipPos.x - 11} 
                      y={tooltipPos.y + 8} 
                      width="80"
                  />
                  <TextSVG
                      x={tooltipPos.x + 30}
                      y={tooltipPos.y + 25}
                      fill="black"
                      fontSize="8"
                      fontWeight="bold"
                      textAnchor="middle">
                      {tooltipPos.value}
                  </TextSVG>
              </Svg>
          </View> 
          : 
          null
      }}

      onDataPointClick={(data) => {
          let isSamePoint = (tooltipPos.x === data.x && tooltipPos.y === data.y) 
          isSamePoint 
          ? 
          setTooltipPos((previousState) => {
              return { 
                  ...previousState,
                  value: data.value,
                  visible: !previousState.visible
              }
          })
          : 
          setTooltipPos({ x: data.x, value: data.value, y: data.y, visible: true });
      }}
      />
    </DashboardSales>
  )
}