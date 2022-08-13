import React from "react";

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import { OrderScreen } from "../../views/order/screens/order-screen/order.screen";
import { OrderDetailsScreen } from "../../views/order/screens/order-details/order-details.screen";
import { OrderHistoryScreen } from "../../views/order/screens/order-history/order-history.screen";

const OrderStack = createStackNavigator();

export const OrderNavigator = () => {
  return (
    <OrderStack.Navigator headerMode="none" screenOptions={{
      ...TransitionPresets.ModalPresentationIOS
    }}>
      <OrderStack.Screen 
        name="OrderScreen"
        component={OrderScreen}
      />

      <OrderStack.Screen 
        name="OrderDetails"
        component={OrderDetailsScreen}
      />

      <OrderStack.Screen 
        name="OrderHistory"
        component={OrderHistoryScreen}
      />
    </OrderStack.Navigator>
  );
}