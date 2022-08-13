import React from "react";
import {AccountScreen} from "../../views/account/screens/account-screen/account-screen";
import {LoginScreen} from "../../views/account/screens/login-screen/login-screen";
import {RegisterScreen} from "../../views/account/screens/register-screen/register-screen";
import { createStackNavigator } from "@react-navigation/stack";
import { VerifyEmailScreen } from "../../views/account/screens/verify-email-screen/verify-email-screen";
import { ChangePasswordScreen } from "../../views/account/screens/change-password-screen/change-password-screen";

const AccountStack = createStackNavigator();

export const AccountNavigator = () => (
  <AccountStack.Navigator headerMode = "none">
    <AccountStack.Screen name="Main" component={AccountScreen} />
    <AccountStack.Screen name="Login" component={LoginScreen} />
    <AccountStack.Screen name="Register" component={RegisterScreen} />
    <AccountStack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
    <AccountStack.Screen name="ChangePassword" component={ChangePasswordScreen} />
  </AccountStack.Navigator>
);