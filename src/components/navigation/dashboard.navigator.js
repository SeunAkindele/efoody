import React from "react";

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import { DashboardScreen } from "../../views/dashboard/screens/dashboard/dashboard.screen";

const DashboardStack = createStackNavigator();

export const DashboardNavigator = () => {
  return (
    <DashboardStack.Navigator headerMode="none" screenOptions={{
      ...TransitionPresets.ModalPresentationIOS
    }}>
      <DashboardStack.Screen 
        name="DashboardScreen"
        component={DashboardScreen}
      />
    </DashboardStack.Navigator>
  );
}