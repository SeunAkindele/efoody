import React, {useState, createContext, useContext} from "react";
import { api } from "../../../api/api";
import { strlen } from "../../../components/utility/functions";
import { LoginContext } from "../../account/context/login.context";

export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const {token} = useContext(LoginContext);
  const [loading, setLoading] = useState(false);
  const [menu, setMenu] = useState([]);
  const [menuBackUp, setMenuBackUp] = useState([]);
  const [cartNum, setCartNum] = useState(0);
  const [ratings, setRatings] = useState(0);

  const getMenu = () => {
    const inputs = {
      page: 'getItems'
    }  
    
    api("item", {request: inputs}, token, response => {
      if(response['success'] === true) {
        if(strlen(response['data']) > 0){
          setMenu(response['data'])
          setMenuBackUp(response['data']);
        } else {
          setMenu(null);
        }
        setLoading(false);
      } else {
        alert(response['data']);
        setLoading(false);
      }
    });
  }

  const getCartNum = () => {
    const inputs = {
      page: 'getCartNum'
    }

    api("item", {request: inputs}, token, response => {
      if(response['success'] === true) {
        setCartNum(response['data'])
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const rateItem = (type, rate, id) => {
    const inputs = {
      page: 'rateItem',
      type: type,
      rate: rate,
      itemId: id
    }

    api("item", {request: inputs}, token, response => {
      if(response['success'] === true) {
        getRatings(id);
        setLoading(false);
        alert("Thanks for rating this menu");
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

  return <MenuContext.Provider value={{
    getMenu,
    menu,
    menuBackUp,
    setMenu,
    loading,
    getCartNum,
    cartNum,
    rateItem,
    ratings,
    getRatings
  }}>{children}</MenuContext.Provider>;
}