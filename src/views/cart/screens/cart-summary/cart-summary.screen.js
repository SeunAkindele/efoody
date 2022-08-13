import React, {useContext, useState} from 'react';
import { ScrollView, Alert } from 'react-native';
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { Underline } from '../../../../components/underline/underline';
import { Spacer } from '../../../../components/spacer/spacer.component';
import { CartSummaryContainer, CartSummaryList, CartSummaryWrapper, CartSummaryTotal, Online, Offline, CartSummarySubTotal } from './cart-summary.screen.styles';
import { Text } from '../../../../components/typography/text.component';
import { format } from '../../../../components/utility/functions';
import { OrderContext } from '../../../order/context/order.context';
import {Paystack} from "react-native-paystack-webview";
import { LoginContext } from '../../../account/context/login.context';

export const CartSummaryScreen = ({route, navigation}) => {

  const {payOnDelivery, payOnline} = useContext(OrderContext);
  const {user: {email, name, phone}} = useContext(LoginContext);
  
  const [paymentStatus, setPaymentStatus] = useState(false);

  const { cart, total, vat } = route.params;

  const delivery = 1000;

  // Adding paystack charges to sales sum
  let pays;

  const subtotal = parseInt(total) + parseInt(vat) + delivery;
  const offlineTotal = parseInt(total) + parseInt(vat) + delivery;

  if(subtotal < 2500) {
    pays = 1.5/100 * subtotal;
  } else {
    pays = (1.5/100 * subtotal) + 100;
  }

  const temp = subtotal + pays;

  let per;
  if(temp < 2500) {
    per = 1.5/100 * temp;
  } else {
    per = (1.5/100 * temp) + 100;
  }

  const salesSum = subtotal + per;

  return (
    <SafeArea>
      <CartSummaryContainer>
        <ScrollView>
          <CartSummaryWrapper>
            <Spacer position="left" size="medium">
              <Text variant="tag">CART SUMMARY</Text>
            </Spacer>
            <Spacer position="bottom" size="medium" />
            <Spacer position="bottom" size="large" />
            {
              cart.map((item, i) =>
                <CartSummaryList key={i}>
                  <Text variant="tag">{item.name}  ({item.qty} x ₦{format(item.price)})</Text>
                  <Text variant="tag">₦{format(item.amount)}</Text>
                </CartSummaryList>
              )
            }
            <Spacer position="bottom" size="small" />
            <Underline />
            <Spacer position="top" size="large" />
            <CartSummarySubTotal>
              <Text variant="tag">Sub total</Text>
              <Text variant="tag">₦{format(total)}</Text>
            </CartSummarySubTotal>
            <CartSummaryList>
              <Text variant="tag">VAT</Text>
              <Text variant="tag">₦{format(vat, 2)}</Text>
            </CartSummaryList>
            <CartSummaryList>
              <Text variant="tag">Delivery fee</Text>
              <Text variant="tag">₦{format(delivery)}</Text>
            </CartSummaryList>
            <Spacer position="top" size="medium" />
            <CartSummaryTotal>
              <Text variant="tag">Total</Text>
              <Text variant="tag">₦{format(offlineTotal.toFixed(2))}</Text>
            </CartSummaryTotal>
            <Spacer position="top" size="medium" />
            <Online onPress={() => setPaymentStatus(true)}>
              <Text variant="tag" color="white">Pay Now</Text>
            </Online>

            {
              paymentStatus 
              &&
              <Paystack  
                paystackKey="pk_test_6f3f86bd6f572cf197b3e66509c6988da6a27c4c"
                paystackSecretKey="sk_test_d1971cb1c1406c636feef71eaba78f8c62c6851e"
                amount={salesSum.toFixed(2)}
                billingEmail={email}
                billingMobile={phone}
                billingName={name}
                activityIndicatorColor="green"
                onCancel={(e) => {
                  alert(`Payment ${e.status}`);
                  setPaymentStatus(false);
                }}
                onSuccess={(res) => {
                  let onlineToken = res.data.transactionRef.reference;
                  payOnline(delivery, navigation, onlineToken)
                }}
                autoStart={true}
              />
            }

            <Spacer position="top" size="medium" />
            <Offline onPress={() => {
              Alert.alert(
                "Pay on Delivery",
                "Order now?",
                [
                  {
                    text: "Cancel",
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => payOnDelivery(delivery, navigation)}
                ],
                { cancelable: false }
              );
            }}>
              <Text color="white" variant="tag">Pay on Delivery</Text>
            </Offline>
          </CartSummaryWrapper>
        </ScrollView>
      </CartSummaryContainer>
    </SafeArea>
  )
};
