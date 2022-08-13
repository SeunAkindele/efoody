import React, {useState, createContext, useContext} from "react";
import { api } from "../../../api/api";
import { checkEmptyInput, strlen } from "../../../components/utility/functions";
import { LoginContext } from "../../account/context/login.context";

export const ItemContext = createContext();

export const ItemContextProvider = ({ children }) => {
  const { token } = useContext(LoginContext);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [dataBackUp, setDataBackUp] = useState([]);
  const [ratings, setRatings] = useState([]);

  const getItems = () => {
    const inputs = {
      page: 'getItems'
    }
    
    setLoading(true);
    api("item", {request: inputs}, token, response => {
      if(response['success'] === true) {
        if(strlen(response['data']) > 0){
        setData(response['data']);
        setDataBackUp(response['data']);
        } else {
          setData(null);
        }
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const getRatings = (itemId) => {
    const inputs = {
      page: 'getRatings',
      itemId: itemId
    }

    setLoading(true);
    api("item", {request: inputs}, token, response => {
      if(response['success'] === true) {
        if(response['data']){
          setRatings(response['data'][0]['rate']);
        } else {
          setRatings(0);
        }
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const onEditItem = (navigation, localUri, data, type) => {
    const inputs = data.split("_");
    const forms = inputs[1].split("-");
    const name = forms[1];
    const price = forms[2];

    if(checkEmptyInput([name, price])) {
      alert("None of the asterisked fields must be empty");
      return false;
    }

    const formData = new FormData();
    formData.append('image', { uri: localUri, name: data, type });

    setLoading(true);
    api("item", formData, token, response => {
      
      if(response['success'] === true) {
        setLoading(false);
        alert(response['data'])
        navigation.goBack();
      } else {
        alert(response['data'])
        setLoading(false);
      }
    }, "multipart/form-data");
  }

  const onDisableItem = (navigation, itemId) => {

    const inputs = {
      page: 'disableItem',
      itemId: itemId
    }

    setLoading(true);
    api("item", {request: inputs}, token, response => {
      
      if(response['success'] === true) {
        setLoading(false);
        alert(response['data'])
        navigation.goBack();
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const onEnableItem = (navigation, itemId) => {

    const inputs = {
      page: 'enableItem',
      itemId: itemId
    }

    setLoading(true);
    api("item", {request: inputs}, token, response => {
      
      if(response['success'] === true) {
        setLoading(false);
        alert(response['data'])
        navigation.goBack();
      } else {
        alert(responsse['data'])
        setLoading(false);
      }
    });
  }

  const deleteIngredient = (navigation, id, itemId) => {
    const inputs = {
      page: 'deleteIngredient',
      id: id,
      itemId: itemId
    }

    setLoading(true);
    api("item", {request: inputs}, token, response => {
      
      if(response['success'] === true) {
        setLoading(false);
        alert(response['data'])
        navigation.goBack();
      } else {
        alert(responsse['data'])
        setLoading(false);
      }
    });
  }
  
  return <ItemContext.Provider value={{
    data,
    loading,
    dataBackUp,
    setData,
    getItems,
    getRatings,
    ratings,
    onEditItem,
    onDisableItem,
    onEnableItem,
    deleteIngredient
  }}>{children}</ItemContext.Provider>;
}