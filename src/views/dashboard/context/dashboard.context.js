import React, {useState, createContext, useContext} from "react";
import { api } from "../../../api/api";
import { strlen } from "../../../components/utility/functions";
import { LoginContext } from "../../account/context/login.context";

export const DashboardContext = createContext();

export const DashboardContextProvider = ({ children }) => {
  const { token } = useContext(LoginContext);

  const [loading, setLoading] = useState(true);
  const [salesData, setSalesData] = useState([]);
  const [orderStatusData, setOrderStatusData] = useState("");
  const [mostSoldItem, setMostSoldItem] = useState("");
  const [customers, setCustomers] = useState("");
  const [staffs, setStaffs] = useState("");
  const [items, setItems] = useState("");

  const getDashboard = () => {
    const inputs = {
      page: 'getDashboard'
    }
    
    api("dashboard", {request: inputs}, token, response => {
      if(response['success'] === true) {
        if(response['data']){
          setSalesData(response['data']['salesData']);
          setOrderStatusData(response['data']['orderStatusData']);
          setMostSoldItem(response['data']['mostSoldItem']);
          setCustomers(response['data']['customers']);
          setStaffs(response['data']['staffs']);
          setItems(response['data']['items']);
        } 
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  return <DashboardContext.Provider value={{
    salesData,
    getDashboard,
    loading,
    orderStatusData,
    mostSoldItem,
    customers,
    staffs,
    items
  }}>{children}</DashboardContext.Provider>;
}