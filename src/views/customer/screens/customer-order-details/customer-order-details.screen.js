import React, { useContext } from 'react';
import { ScrollView,Alert } from 'react-native';
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { Underline } from '../../../../components/underline/underline';
import { Spacer } from '../../../../components/spacer/spacer.component';
import { CustomerOrderSummaryContainer, CustomerOrderSummaryList, CustomerOrderSummaryWrapper, CustomerOrderSummaryTotal, Dispatch } from './customer-order-details.screen.styles';
import { Text } from '../../../../components/typography/text.component';
import { FontAwesome5 } from '@expo/vector-icons';
import { format, readableDate, ucFirst, ucWord } from '../../../../components/utility/functions';
import { CustomerContext } from "../../context/customer.context";
import { Trash } from '../../components/customer-order-info-card/customer-order-info-card.styles';

export const CustomerOrderDetailsScreen = ({navigation, route}) => {

  const {item} = route.params;
  const {amount, delivery_fee, token, vat_value, order, customer_name, customer_phone, customer_address, customer_id, status, staff_name} = item;
  const total = parseInt(amount) + parseInt(vat_value) + parseInt(delivery_fee);

  const {cancleOrder, dispatchOrder} = useContext(CustomerContext);

  return (
    <SafeArea>
      <CustomerOrderSummaryContainer>
        <ScrollView>
        <CustomerOrderSummaryWrapper>
            <CustomerOrderSummaryList>
              <Text variant="tag">ORDER: #{token}</Text>
              {status == 2 && <Trash onPress={() => {
            Alert.alert(
              "Cancle Order",
              "Are you sure?",
              [
                {
                  text: "Cancel",
                  style: "cancel"
                },
                { text: "OK", onPress: () => {
                  cancleOrder(token, customer_id);
                  navigation.goBack();
                }
                }
              ],
              { cancelable: false }
            );
          }} name="closecircle" />}
              </CustomerOrderSummaryList>
            <Spacer position="bottom" size="medium" />
            <CustomerOrderSummaryList>
                <Text variant="tag"><FontAwesome5 name="calendar-alt" />  {readableDate(item.date)}</Text>
            </CustomerOrderSummaryList>
            <Underline />
            <Spacer position="bottom" size="small" />
            {
              order.map((item, i) =>
                <CustomerOrderSummaryList key={i}>
                  <Text variant="tag">{item.name}  ({item.qty} x ₦{format(item.price)})</Text>
                  <Text variant="tag">₦{format(item.amount)}</Text>
                </CustomerOrderSummaryList>
              )
            }
            <Spacer position="bottom" size="small" />
            <Underline />
            <Spacer position="top" size="small" />

            <CustomerOrderSummaryList>
              <Text variant="tag">VAT</Text>
              <Text variant="tag">₦{format(vat_value, 2)}</Text>
            </CustomerOrderSummaryList>
            <CustomerOrderSummaryList>
              <Text variant="tag">Delivery Fee</Text>
              <Text variant="tag">₦{format(delivery_fee)}</Text>
            </CustomerOrderSummaryList>
            <CustomerOrderSummaryTotal>
              <Text variant="tag">Total</Text>
              <Text variant="tag">₦{format(total, 2)}</Text>
            </CustomerOrderSummaryTotal>
            <Spacer position="top" size="large" />
            {status == 2 && <Dispatch onPress={() =>
              Alert.alert(
                "Dispatch Order",
                "Are you sure?",
                [
                  {
                    text: "Cancel",
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => {
                    dispatchOrder(token, customer_id);
                    navigation.goBack();
                  }}
                ],
                { cancelable: false }
              )
            }>
              <Text variant="tag" color="white">Dispatch Order</Text>
            </Dispatch>}
            <CustomerOrderSummaryList>
              <Text variant="tag">Customer: {ucFirst(customer_name)}</Text>
            </CustomerOrderSummaryList>
            <CustomerOrderSummaryList>
              <Text variant="tag">Phone: {customer_phone}</Text>
            </CustomerOrderSummaryList>
            <CustomerOrderSummaryList>
              <Text variant="tag">Address: {customer_address}</Text>
            </CustomerOrderSummaryList>
            {
              staff_name
              &&
              <CustomerOrderSummaryList>
                <Text variant="tag">STAFF</Text>
                <Text variant="tag">{ucWord(staff_name)}</Text>
              </CustomerOrderSummaryList>
            }
          </CustomerOrderSummaryWrapper>
        </ScrollView>
      </CustomerOrderSummaryContainer>
    </SafeArea>
  )
};