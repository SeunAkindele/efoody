import React, {useContext, useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Searchbar } from "react-native-paper";
import { SafeArea } from "../../../../components/utility/safe-area.component";

import { CustomerOrderIcon, CustomerOrderList, SearchContainer } from './customer-order-history.screen.styles';
import {Text} from "../../../../components/typography/text.component";
import { CustomerOrderInfoCard } from "../../components/customer-order-info-card/customer-order-info-card.component";
import { CustomerContext } from "../../context/customer.context";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { IsLoading } from '../../../../components/loading/loading.component';
import { strlen } from '../../../../components/utility/functions';
import { ErrorContainer } from '../../../../components/utility/error.component.styles';

export const CustomerOrderHistoryScreen = ({route, navigation}) => {

  const [loadOrder, setLoadOrder] = useState(false);
  const { customerPastOrder, customerPastOrderBackUp, setCustomerPastOrder, getCustomerPastOrder, loading } = useContext(CustomerContext);

  const { customer } = route.params;
  
  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => { 
        getCustomerPastOrder(customer.id);
      }, 2000);
    }, [])
  );

  const reload = () => {
    setLoadOrder(true);
    setTimeout(() => { 
      getCustomerPastOrder(customer.id)
      setLoadOrder(false);
    }, 2000);
  }

  const search = (text) => {
    setCustomerPastOrder(customerPastOrderBackUp.filter(item => item.token.toLocaleLowerCase().includes(text.toLocaleLowerCase())));
  }

  return (
    <SafeArea>
    <IsLoading loading={loading} />
    <SearchContainer>
     <Searchbar placeholder="Search" onChangeText={(text) => search(text)} />
   </SearchContainer>
       {loading
     
     &&
     <ErrorContainer>
       <Text variant="error">Fetching Data...</Text>
     </ErrorContainer>}
   {customerPastOrder !== null
     &&
     strlen(customerPastOrder) > 0
     ?
   
    <>
      
       <CustomerOrderList
         data={customerPastOrder}
         onRefresh={reload}
         refreshing={loading}
         keyExtractor={(item) => item.id}
         renderItem={({ item }) => (
           <Spacer position="bottom" size="large">
             <TouchableOpacity onPress={() => navigation.navigate("CustomerOrderDetails", {
               item: item, navigation: navigation
             })}>
               <CustomerOrderInfoCard customerOrder={item} loadOrder={loadOrder} />
             </TouchableOpacity>
           </Spacer>
         )}
       />
      </>
       :
       customerPastOrder == null
       &&
       <CustomerOrderList
         data={[{id: 1}]}
         onRefresh={reload}
         refreshing={loading}
         keyExtractor={(item) => item.id}
         renderItem={({ item }) => (
         <ErrorContainer>
             <CustomerOrderIcon bg="#ccc" icon="close" />
             <Spacer position="bottom" size="large">
             <Text>No orders yet!</Text>
           </Spacer>
         </ErrorContainer>
       )}
     />
     
       }

   
 </SafeArea>
  )
};