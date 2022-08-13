import React, {useState, createContext, useContext} from "react";
import { api } from "../../../api/api";
import { checkEmptyInput, strlen } from "../../../components/utility/functions";
import { LoginContext } from "../../account/context/login.context";

export const StaffContext = createContext();

export const StaffContextProvider = ({ children }) => {
  const {token} = useContext(LoginContext);

  const [loading, setLoading] = useState(true);
  const [locations, setLocations] = useState([]);
  const [order, setOrder] = useState([]);
  const [orderBackUp, setOrderBackUp] = useState([]);
  const [pastOrder, setPastOrder] = useState([]);
  const [pastOrderBackUp, setPastOrderBackUp] = useState([]);
  const [pending, setPending] = useState([]);
  const [staffs, setStaffs] = useState([]);
  const [staffsBackUp, setStaffsBackUp] = useState([]);


  const getStaffs = () => {
    const inputs = {
      page: 'getStaffs'
    }
    setLoading(true);
    api("staff", {request: inputs}, token, response => {
      if(response['success'] === true) {
        if(response['data']){
          setStaffs(response['data']);
          setStaffsBackUp(response['data']);
        } else {
          setStaffs(null);
        }
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const getPastOrder = () => {
    const inputs = {
      page: 'getPastOrder'
    }
    
    api("staff", {request: inputs}, token, response => {
      if(response['success'] === true) {
        if(response['data']){
          if(strlen(response['data']['data']) > 0){
            setPastOrder(response['data']['data']);
            setPastOrderBackUp(response['data']['data']);
          } else {
            setPastOrder(null);
          }
        } else {
          setPastOrder(null);
        }
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }


  const getLocations = () => {
    const inputs = {
      page: 'getLocations'
    }

    const arr=[];

    api("location", {request: inputs}, token, response => {
      if(response['success'] === true) {
        if(response['data']){
          let data = response['data'][0];
          arr.push({label: data.name, value: data.id});
          setLocations(arr);
          setLoading(false);
        }
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const getStaffPastOrder = (staffId) => {
    const inputs = {
      page: 'getStaffPastOrder',
      staffId
    }
    
    api("staff", {request: inputs}, token, response => {
      if(response['success'] === true) {
        if(response['data']){
          if(strlen(response['data']['data']) > 0){
            setPastOrder(response['data']['data']);
            setPastOrderBackUp(response['data']['data']);
          } else {
            setPastOrder(null);
          }
        } else {
          setPastOrder(null);
        }
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const getStaffOrder = (staffId) => {
    const inputs = {
      page: 'getStaffOrder',
      staffId

    }
    api("staff", {request: inputs}, token, response => {
      if(response['success'] === true) {
        if(response['data']){
          if(strlen(response['data']['data']) > 0){
            setOrder(response['data']['data']);
            setOrderBackUp(response['data']['data']);
          } else {
            setOrder(null);
          }
          setLoading(true);
        } else {
          setOrder(null);
        }
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const getOrder = () => {
    const inputs = {
      page: 'getOrder'
    }
    api("staff", {request: inputs}, token, response => {
      if(response['success'] === true) {
        if(response['data']){
          if(strlen(response['data']['data']) > 0){
            setOrder(response['data']['data']);
            setOrderBackUp(response['data']['data']);
            setPending(response['data']['pending']);
          } else {
            setOrder(null);
          }
          setLoading(true);
        } else {
          setOrder(null);
        }
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const createStaff = (name, email, phone, type, location, navigation) => {
    const inputs = {
      page: 'createStaff',
      name: name,
      phone: phone,
      email: email,
      type: type,
      location: location
    }

    if(checkEmptyInput([name, email, phone, type, location])) {
      alert("None of the asterisked fields be empty");
      return false;
    }

    setLoading(true);
    api("staff", {request: inputs}, token, response => {
      if(response['success'] === true) {
        setLoading(false);
        alert("Entry saved successfully");
        navigation.goBack();
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
        getOrder();
        getPastOrder();
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
        getOrder();
        getPastOrder();
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const disableStaff = (staffId) => {
    const inputs = {
      page: 'disableStaff',
      staffId
    }
    setLoading(true);
    api("staff", {request: inputs}, token, response => {
      if(response['success'] === true) {
        getStaffs();
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const enableStaff = (staffId) => {
    const inputs = {
      page: 'enableStaff',
      staffId
    }
    setLoading(true);
    api("staff", {request: inputs}, token, response => {
      if(response['success'] === true) {
        getStaffs();
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  return <StaffContext.Provider value={{
    order,
    cancleOrder,
    dispatchOrder,
    orderBackUp,
    setOrder,
    pending,
    loading,
    createStaff,
    locations,
    getLocations,
    getOrder,
    pastOrderBackUp,
    pastOrder,
    setPastOrder,
    getPastOrder,
    getStaffs,
    staffs,
    staffsBackUp,
    disableStaff,
    enableStaff,
    getStaffOrder,
    getStaffPastOrder
  }}>{children}</StaffContext.Provider>;
}