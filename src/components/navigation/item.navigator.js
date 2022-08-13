import React from "react";

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import { ItemScreen } from "../../views/item/screens/item-screen/item.screen";
import { ItemDetailScreen } from "../../views/item/screens/item-detail-screen/item-detail.screen";
import { ItemManagementScreen } from "../../views/item/screens/item-management/item-management.screen";

const ItemStack = createStackNavigator();

export const ItemNavigator = () => {
  return (
    <ItemStack.Navigator headerMode="none" screenOptions={{
      ...TransitionPresets.ModalPresentationIOS
    }}>
      <ItemStack.Screen 
        name="ItemScreen"
        component={ItemScreen}
      />

      <ItemStack.Screen 
        name="ItemDetails"
        component={ItemDetailScreen}
      />

      <ItemStack.Screen 
        name="ItemManagement"
        component={ItemManagementScreen}
      />
    </ItemStack.Navigator>
  );
}