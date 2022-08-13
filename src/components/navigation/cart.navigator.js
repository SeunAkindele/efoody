import React from "react";

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import { CartScreen } from "../../views/cart/screens/cart-screen/cart.screen";
import { CartSummaryScreen } from "../../views/cart/screens/cart-summary/cart-summary.screen";

const CartStack = createStackNavigator();

export const CartNavigator = () => {
  return (
    <CartStack.Navigator headerMode="none" screenOptions={{
      ...TransitionPresets.ModalPresentationIOS
    }}>
      <CartStack.Screen 
        name="CartScreen"
        component={CartScreen}
      />

      <CartStack.Screen 
        name="CartSummary"
        component={CartSummaryScreen}
      />
    </CartStack.Navigator>
  );
}