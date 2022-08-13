import React from "react";

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import { MenuScreen } from "../../views/menu/screens/menu-screen/menu.screen";
import { MenuDetailScreen } from "../../views/menu/screens/menu-detail-screen/menu-detail.screen";

const MenuStack = createStackNavigator();

export const MenuNavigator = () => {
  return (
    <MenuStack.Navigator headerMode="none" screenOptions={{
      ...TransitionPresets.ModalPresentationIOS
    }}>
      <MenuStack.Screen 
        name="MenuScreen"
        component={MenuScreen}
      />

      <MenuStack.Screen 
        name="MenuDetail"
        component={MenuDetailScreen}
      />
    </MenuStack.Navigator>
  );
}