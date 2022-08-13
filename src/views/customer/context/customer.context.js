import React, {useState, createContext, useContext} from "react";
import { api } from "../../../api/api";
import { strlen } from "../../../components/utility/functions";
import { LoginContext } from "../../account/context/login.context";

export const CustomerContext = createContext();

export const CustomerContextProvider = ({ children }) => {
  const {token, authorization} = useContext(LoginContext);

  const [loading, setLoading] = useState(true);
  const [customerOrder, setCustomerOrder] = useState([]);
  const [customerOrderBackUp, setCustomerOrderBackUp] = useState([]);
  const [customerPastOrderBackUp, setCustomerPastOrderBackUp] = useState([]);
  const [customerPastOrder, setCustomerPastOrder] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [customersBackUp, setCustomersBackUp] = useState([]);

  const getCustomers = () => {
    const inputs = {
      page: 'getCustomers'
    }
    setLoading(true);
    api("customer", {request: inputs}, token, response => {
      if(response['success'] === true) {
        if(response['data']){
          setCustomers(response['data']);
          setCustomersBackUp(response['data']);
        } else {
          setCustomers(null);
        }
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const getCustomerOrder = (customerId) => {
    const inputs = {
      page: 'getCustomerOrder',
      customerId
    }
    setLoading(true);
    api("staff", {request: inputs}, token, response => {
      if(response['success'] === true) {
        if(response['data']){
          if(strlen(response['data']['data']) > 0){
            setCustomerOrder(response['data']['data']);
            setCustomerOrderBackUp(response['data']['data']);
          } else {
            setCustomerOrder(null);
          }
        } else {
          setCustomerOrder(null);
        }
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const cancleOrder = (orderToken, customerId) => {
    const inputs = {
      page: 'cancleOrder',
      token: orderToken,
      customerId
    }
    setLoading(true);
    api("staff", {request: inputs}, token, response => {
      if(response['success'] === true) {
        getCustomerOrder(customerId);
        getCustomerPastOrder(customerId);
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const dispatchOrder = (orderToken, customerId) => {
    
    const inputs = {
      page: 'dispatchOrder',
      token: orderToken,
      customerId
    }
    setLoading(true);
    api("staff", {request: inputs}, token, response => {
      if(response['success'] === true) {
        getCustomerOrder(customerId);
        getCustomerPastOrder(customerId);
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const disableCustomer = (customerId) => {
    const inputs = {
      page: 'disableCustomer',
      customerId
    }
    setLoading(true);
    api("customer", {request: inputs}, token, response => {
      if(response['success'] === true) {
       
          getCustomers();
       
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const enableCustomer = (customerId) => {
    const inputs = {
      page: 'enableCustomer',
      customerId
    }
    setLoading(true);
    api("customer", {request: inputs}, token, response => {
      if(response['success'] === true) {
       
          getCustomers();
        
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const getCustomerPastOrder = (customerId) => {
    const inputs = {
      page: 'getCustomerPastOrder',
      customerId
    }
    setLoading(true);
    api("staff", {request: inputs}, token, response => {
      if(response['success'] === true) {
        if(response['data']){
          if(strlen(response['data']['data']) > 0){
            setCustomerPastOrder(response['data']['data']);
            setCustomerPastOrderBackUp(response['data']['data']);
          } else {
            setCustomerPastOrder(null);
          }
        } else {
          setCustomerPastOrder(null);
        }
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }
  return <CustomerContext.Provider value={{
    customerPastOrder,
    setCustomerPastOrder,
    customerOrder,
    getCustomerPastOrder,
    getCustomerOrder,
    customersBackUp,
    setCustomerOrder,
    customerOrderBackUp,
    setCustomers,
    customers,
    getCustomers,
    loading,
    authorization,
    cancleOrder,
    dispatchOrder,
    customerPastOrderBackUp,
    disableCustomer,
    enableCustomer
  }}>{children}</CustomerContext.Provider>;
}