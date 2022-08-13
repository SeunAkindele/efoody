import React from "react";

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import { SettingScreen } from "../../views/setting/screens/setting-screen/setting.screen";
import { ProfileManagement } from "../../views/setting/screens/manage-profile/manage-profile";

const SettingStack = createStackNavigator();

export const SettingNavigator = ({route, navigation}) => {
  return (
    <SettingStack.Navigator 
    headerMode="none" screenOptions={{
      ...TransitionPresets.ModalPresentationIOS
    }}>
      <SettingStack.Screen 
        name="SettingScreen"
        component={SettingScreen}
      />

      <SettingStack.Screen
        name="ProfileManagement"
        component={ProfileManagement}
      />
    </SettingStack.Navigator>
  );
}