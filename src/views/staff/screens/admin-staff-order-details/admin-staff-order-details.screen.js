import React, {useContext} from 'react';
import { ScrollView, Alert } from 'react-native';
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { Underline } from '../../../../components/underline/underline';
import { Spacer } from '../../../../components/spacer/spacer.component';
import { StaffOrderSummaryContainer, StaffOrderSummaryList, StaffOrderSummaryWrapper, StaffOrderSummaryTotal,Dispatch } from './admin-staff-order-details.screen.styles';
import { Text } from '../../../../components/typography/text.component';
import { format, readableDate, ucFirst, ucWord } from '../../../../components/utility/functions';
import { FontAwesome5 } from '@expo/vector-icons';
import { Trash } from '../../components/staff-order-info-card/staff-order-info-card.styles';
import { StaffContext } from '../../context/staff.context';

export const AdminStaffOrderDetailsScreen = ({route, navigation}) => {
 
  const {item} = route.params;
  const {amount, delivery_fee, token, vat_value, order, customer_name, customer_phone, customer_address, customer_id, status, staff_name} = item;
  const total = parseInt(amount) + parseInt(vat_value) + parseInt(delivery_fee);

  const {cancleOrder, dispatchOrder} = useContext(StaffContext);
   
  return (
    <SafeArea>
      <StaffOrderSummaryContainer>
        <ScrollView>
          <StaffOrderSummaryWrapper>
            <StaffOrderSummaryList>
              <Text variant="tag">ORDER: #{token}</Text>
             
              </StaffOrderSummaryList>
            <Spacer position="bottom" size="medium" />
            <StaffOrderSummaryList>
                <Text variant="tag"><FontAwesome5 name="calendar-alt" />  {readableDate(item.date)}</Text>
            </StaffOrderSummaryList>
            <Underline />
            <Spacer position="bottom" size="small" />
            {
              order.map((item, i) =>
                <StaffOrderSummaryList key={i}>
                  <Text variant="tag">{item.name}  ({item.qty} x ₦{format(item.price)})</Text>
                  <Text variant="tag">₦{format(item.amount)}</Text>
                </StaffOrderSummaryList>
              )
            }
            <Spacer position="bottom" size="small" />
            <Underline />
            <Spacer position="top" size="small" />

            <StaffOrderSummaryList>
              <Text variant="tag">VAT</Text>
              <Text variant="tag">₦{format(vat_value, 2)}</Text>
            </StaffOrderSummaryList>
            <StaffOrderSummaryList>
              <Text variant="tag">Delivery Fee</Text>
              <Text variant="tag">₦{format(delivery_fee)}</Text>
            </StaffOrderSummaryList>
            <StaffOrderSummaryTotal>
              <Text variant="tag">Total</Text>
              <Text variant="tag">₦{format(total, 2)}</Text>
            </StaffOrderSummaryTotal>
            <Spacer position="top" size="large" />
            
            <StaffOrderSummaryList>
              <Text variant="tag">Customer: {ucFirst(customer_name)}</Text>
            </StaffOrderSummaryList>
            <StaffOrderSummaryList>
              <Text variant="tag">Phone: {customer_phone}</Text>
            </StaffOrderSummaryList>
            <StaffOrderSummaryList>
              <Text variant="tag">Address: {customer_address}</Text>
            </StaffOrderSummaryList>
            {
              staff_name
              &&
              <StaffOrderSummaryList>
                <Text variant="tag">STAFF</Text>
                <Text variant="tag">{ucWord(staff_name)}</Text>
              </StaffOrderSummaryList>
            }
          </StaffOrderSummaryWrapper>
        </ScrollView>
      </StaffOrderSummaryContainer>
    </SafeArea>
  )
};