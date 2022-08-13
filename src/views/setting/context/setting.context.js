import React, {useState, createContext, useContext} from "react";
import { api } from "../../../api/api";
import { LoginContext } from "../../account/context/login.context";

export const SettingContext = createContext();

export const SettingContextProvider = ({ children }) => {
  const {token, onLogout} = useContext(LoginContext);
  const [loading, setLoading] = useState(false);

  const manageProfile = (phone, password, address) => {
    const inputs = {
      page: 'manageProfile',
      phone: phone,
      password: password,
      address: address
    }

    api("setting", {request: inputs}, token, response => {
      if(response['success'] === true) {
        alert(response['data']);
        onLogout();
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  return <SettingContext.Provider value={{
    loading,
    manageProfile
  }}>{children}</SettingContext.Provider>;
}