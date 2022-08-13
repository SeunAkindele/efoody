import React, {useState, useContext, createContext} from "react";
import { api } from "../../../api/api";
import { empty } from "../../../components/utility/functions";
import { LoginContext } from "../../account/context/login.context";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const {token} = useContext(LoginContext);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [vat, setVat] = useState(0);

  const addToCart = (itemId, navigation) => {
    const inputs = {
      page: 'addToCart',
      itemId: itemId
    }
    
    api("cart", {request: inputs}, token, response => {
      if(response['success'] === true) {
        setLoading(false);
        navigation.goBack();
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const updateCart = (itemId, operator="") => {
    const inputs = {
      page: 'updateCart',
      itemId: itemId,
      operator: operator
    }
    
    api("cart", {request: inputs}, token, response => {
      if(response['success'] === true) {
        getCart();
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const getCart = () => {
    const inputs = {
      page: 'getCart'
    }
    setLoading(true);
    api("cart", {request: inputs}, token, response => {
      
      if(response['success'] === true) {
        if(!empty(response['data'])){
          setCart(response['data']['carts']);
          setVat(response['data']['vat']);
          setTotal(response['data']['total']);
        } else {
          setCart(null);
        }

        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const deleteCart = (id, itemId) => {
    const inputs = {
      page: 'deleteCart',
      id: id,
      itemId: itemId
    }
    
    api("cart", {request: inputs}, token, response => {
      if(response['success'] === true) {
        getCart();
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  return <CartContext.Provider value={{
    addToCart,
    cart,
    getCart,
    updateCart,
    deleteCart,
    loading,
    total,
    vat
  }}>{children}</CartContext.Provider>;
}