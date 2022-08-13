import React, {useContext} from "react";

import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";
import { LoginContext } from "../../views/account/context/login.context";

export const Navigation = () => {
  const { isAuthenticated, authorization } = useContext(LoginContext);
  
  return (
    <NavigationContainer>
      { isAuthenticated ? <AppNavigator authorization={authorization} /> : <AccountNavigator /> }
    </NavigationContainer>
  )
}