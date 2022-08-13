import React, {useState, createContext} from "react";
import { api } from "../../../api/api";
import { checkEmptyInput } from "../../../components/utility/functions";

export const RegisterContext = createContext();

export const RegisterContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    const inputs = {
      page: 'getLocations'
    }

    const arr=[];

    api("register", {request: inputs}, "", response => {
      if(response['success'] === true) {
        if(response['data']) {
          let data = response['data'];
          data.map(item => arr.push({label: item.name, value: item.id}));
          setLocations(arr);
          setLoading(false);
        }
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const onRegister = (name, email, phone, password, location, address, navigation) => {
    if(checkEmptyInput([name, email, phone, password, address, location])) {
      alert("None of the fields must be empty");
      return false;
    }
    const inputs = {
      name, 
      email, 
      phone, 
      password,
      location,
      address,
      page: ""
    }
    setLoading(true);
    api("register", {request: inputs}, "", response => {
      if(response['success'] === true) {
        setLoading(false);
        alert(response['data']);
        navigation.navigate("Login");
      } else {
        setLoading(false);
        alert(response['data']);
      }
    });
  }

  return <RegisterContext.Provider value={{
    onRegister,
    loading,
    locations,
    getLocations
  }}>{children}</RegisterContext.Provider>;
}