import React, {useState, useContext } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { MenuInfoCard } from "../../components/menu-info-card/menu-info-card.component";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { SearchContainer, MenuList, MenuIcon, Cart, CartCount,CartCountText } from "./menu-screen.styles";
import { MenuContext } from "../../context/menu.context";
import { FadeInView } from "../../../../components/animations/fade.animation";
import { IsLoading } from "../../../../components/loading/loading.component";
import { strlen } from "../../../../components/utility/functions";
import { Text } from "../../../../components/typography/text.component";
import { ErrorContainer } from "../../../../components/utility/error.component.styles";

export const MenuScreen = ({ navigation }) => {
  const { menu, setMenu, menuBackUp, getMenu, getCartNum, cartNum, loading } = useContext(MenuContext);

  const [loadCart, setLoadCart] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setLoadCart(true);
      setTimeout(() => { 
        getMenu();
        getCartNum();
        setLoadCart(false);
      }, 2000);
    }, [])
  );

  const refresh = () => {
    setLoadCart(true);
    setTimeout(() => { 
      getMenu();
      getCartNum();
      setLoadCart(false);
    }, 2000);
  }

  const search = (text) => {
    setMenu(menuBackUp.filter(item => item.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())));
  }

  return (
    <SafeArea>
      <IsLoading loading={loading} />
      <SearchContainer>
        <Searchbar placeholder="Search" onChangeText={(text) => search(text)} />
      </SearchContainer>
      <Cart onPress={() => navigation.navigate("Cart")} name="shoppingcart" />
      {cartNum > 0
        &&
        <CartCount onPress={() => navigation.navigate("Cart")}>
          <CartCountText>{loadCart ? '---' : cartNum}</CartCountText>
        </CartCount>}
      {loading 
        &&
        <ErrorContainer>
          <Text variant="error">Fetching Data...</Text>
        </ErrorContainer>}
      {menu !== null
        &&
        strlen(menu) > 0
        ?
        <>
          <MenuList
            data={menu}
            keyExtractor={(item) => item.id}
            onRefresh={refresh}
            refreshing={loading}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => item.disabled_status == 0 ? navigation.navigate("MenuDetail", { menu: item }) : alert("This menu is unavailable for now.")} key={item.id}>
                <Spacer position="bottom" size="large">
                  <FadeInView>
                    <MenuInfoCard menu={item} />
                  </FadeInView>
                </Spacer>
              </TouchableOpacity>
            )}
          />
        </>
        :
        
          menu === null
          &&
        <MenuList
            data={[{id: 1}]}
            keyExtractor={(item) => item.id}
            onRefresh={refresh}
            refreshing={loading}
            renderItem={({ item }) => (
              <ErrorContainer>
                <Spacer position="bottom" size="large">
                  <Text variant="error">No Data Yet</Text>
                </Spacer>
                <MenuIcon bg="#ccc" icon="cart-off" />
              </ErrorContainer>
            )}
          />
       } 
    </SafeArea>
  );
};