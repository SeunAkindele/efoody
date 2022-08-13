import React from "react";

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import { StaffOrderScreen } from "../../views/staff/screens/staff-order-screen/staff-order.screen";
import { StaffOrderDetailsScreen } from "../../views/staff/screens/staff-order-details/staff-order-details.screen";
import { StaffOrderHistoryScreen } from "../../views/staff/screens/staff-order-history/staff-order-history.screen";

const StaffStack = createStackNavigator();

export const StaffNavigator = () => {
  return (
    <StaffStack.Navigator headerMode="none" screenOptions={{
      ...TransitionPresets.ModalPresentationIOS
    }}>
      <StaffStack.Screen 
        name="StaffOrder"
        component={StaffOrderScreen}
      />

      <StaffStack.Screen 
        name="StaffOrderDetails"
        component={StaffOrderDetailsScreen}
      />

      <StaffStack.Screen 
        name="StaffOrderHistory"
        component={StaffOrderHistoryScreen}
      />
    </StaffStack.Navigator>
  );
}