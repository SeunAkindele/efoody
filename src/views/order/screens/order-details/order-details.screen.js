import React from 'react';
import { ScrollView } from 'react-native';
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { Underline } from '../../../../components/underline/underline';
import { Spacer } from '../../../../components/spacer/spacer.component';
import { OrderSummaryContainer, OrderSummaryList, OrderSummaryWrapper, OrderSummaryTotal } from './order-details.screen.styles';
import { Text } from '../../../../components/typography/text.component';
import { format, readableDate } from '../../../../components/utility/functions';
import { FontAwesome5 } from '@expo/vector-icons';

export const OrderDetailsScreen = ({route}) => {
  const {item} = route.params;
  const {amount, delivery_fee, token, vat_value, order} = item;
  const total = parseInt(amount) + parseInt(vat_value) + parseInt(delivery_fee);
  
  return (
    <SafeArea>
      <OrderSummaryContainer>
        <ScrollView>
          <OrderSummaryWrapper>
            <Spacer position="left" size="medium">
              <Text variant="tag">ORDER: #{token}</Text>
            </Spacer>
            <Spacer position="bottom" size="medium" />
            <OrderSummaryList>
                <Text variant="tag"><FontAwesome5 name="calendar-alt" />  {readableDate(item.date)}</Text>
            </OrderSummaryList>
            <Underline />
            <Spacer position="bottom" size="large" />
            {
              order.map((item, i) =>
                <OrderSummaryList key={i}>
                  <Text variant="tag">{item.name}  ({item.qty} x ₦{format(item.price)})</Text>
                  <Text variant="tag">₦{format(item.amount)}</Text>
                </OrderSummaryList>
              )
            }

            <Spacer position="bottom" size="small" />
            <Underline />
            <Spacer position="top" size="large" />

            <OrderSummaryList>
              <Text variant="tag">VAT</Text>
              <Text variant="tag">₦{format(vat_value, 2)}</Text>
            </OrderSummaryList>
            <OrderSummaryList>
              <Text variant="tag">Delivery Fee</Text>
              <Text variant="tag">₦{format(delivery_fee)}</Text>
            </OrderSummaryList>
            <OrderSummaryTotal>
              <Text variant="tag">Total</Text>
              <Text variant="tag">₦{format(total, 2)}</Text>
            </OrderSummaryTotal>
            <Spacer position="top" size="large" />
          </OrderSummaryWrapper>
        </ScrollView>
      </OrderSummaryContainer>
    </SafeArea>
  )
};