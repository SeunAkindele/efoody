import React, { useContext, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { CartInfoCard } from "../../components/cart-info-card/cart-info-card.component";
import { CartIcon, CartList, CartCallToAction, Arrow } from './cart.screen.styles';
import { CartContext } from "../../context/cart.context";
import {Text} from "../../../../components/typography/text.component";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { IsLoading } from '../../../../components/loading/loading.component';
import { strlen } from '../../../../components/utility/functions';
import { ErrorContainer } from '../../../../components/utility/error.component.styles';
import { FadeInView } from '../../../../components/animations/fade.animation';

export const CartScreen = ({navigation}) => {
  const { getCart, cart, total, vat, loading } = useContext(CartContext);
  const [loadCart, setLoadCart] = useState(false);
  
  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => { 
        getCart();
      }, 2000);
    }, [])
  );

  const refresh = () => {
    setLoadCart(true);
    setTimeout(() => { 
      getCart();
      setLoadCart(false);
    }, 2000);
  }
  
  return (
    <SafeArea>
      
      <IsLoading loading={loading} />
      {(cart !== null && loading && strlen(cart) < 1)
        &&
        <ErrorContainer>
          <Text variant="error">Fetching Data...</Text>
        </ErrorContainer>}
      {cart !== null
      && strlen(cart) > 0 
      ? 
      <>
          <CartList
            data={cart}
            onRefresh={refresh}
            refreshing={loading}
            renderItem={({ item }) => (
              <Spacer position="bottom" size="large">
                <FadeInView>
                  <CartInfoCard cart={item} loadCart={loadCart} />
                </FadeInView>
              </Spacer>
            )}
            keyExtractor={(item) => item.id}
          />

          <CartCallToAction onPress={() => !loadCart && navigation.navigate("CartSummary", {
            cart: cart, total: total, vat: vat
          })}>
          <Text color="white" variant="label">Proceed to payment</Text>
          <Arrow name="up" />
        </CartCallToAction>
        </>
        :
        cart == null
        &&
        <CartList
        data={[{id: 1}]}
        onRefresh={refresh}
        refreshing={loading}
        renderItem={({ item }) => (
          <ErrorContainer>
            <CartIcon bg="#ccc" icon="cart-off" />
            <Text>Your cart is empty!</Text>
          </ErrorContainer>
        )}
        keyExtractor={(item) => item.id}
      />
        }

     

        
        
    </SafeArea>
  )
};