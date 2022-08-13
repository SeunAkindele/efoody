import React from "react";

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import { CustomerScreen } from "../../views/customer/screens/customer-screen/customer.screen";
import { CustomerOrderScreen } from "../../views/customer/screens/customer-order-screen/customer-order.screen";
import {CustomerOrderHistoryScreen} from "../../views/customer/screens/customer-order-history/customer-order-history.screen"
import { CustomerOrderDetailsScreen } from "../../views/customer/screens/customer-order-details/customer-order-details.screen";
import { CustomerManagementScreen } from "../../views/customer/screens/customer-management/customer-management.screen";

const CustomerStack = createStackNavigator();

export const CustomerNavigator = () => {
  return (
    <CustomerStack.Navigator headerMode="none" screenOptions={{
      ...TransitionPresets.ModalPresentationIOS
    }}>
      <CustomerStack.Screen 
        name="CustomerScreen"
        component={CustomerScreen}
      />

      <CustomerStack.Screen 
        name="CustomerOrders"
        component={CustomerOrderScreen}
      />

      <CustomerStack.Screen 
        name="CustomerOrderDetails"
        component={CustomerOrderDetailsScreen}
      />

      <CustomerStack.Screen
        name="CustomerOrderHistory"
        component={CustomerOrderHistoryScreen}
      />

      <CustomerStack.Screen 
        name="CustomerManagement"
        component={CustomerManagementScreen}
      />
    </CustomerStack.Navigator>
  );
}