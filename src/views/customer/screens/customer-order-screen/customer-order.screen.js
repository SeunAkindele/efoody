import React, {useContext, useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity,View } from 'react-native';
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { Searchbar } from "react-native-paper";
import { CustomerOrderIcon, CustomerOrderList, SearchContainer, CustomerOrderHistory, Arrow } from './customer-order-screen.styles';
import {Text} from "../../../../components/typography/text.component";
import { CustomerOrderInfoCard } from "../../components/customer-order-info-card/customer-order-info-card.component";
import { CustomerContext } from "../../context/customer.context";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { IsLoading } from '../../../../components/loading/loading.component';
import { strlen } from '../../../../components/utility/functions';
import { ErrorContainer } from '../../../../components/utility/error.component.styles';

export const CustomerOrderScreen = ({navigation, route}) => {

  const [loadOrder, setLoadOrder] = useState(false);
  const { customerOrder, customerOrderBackUp, setCustomerOrder, getCustomerOrder, loading } = useContext(CustomerContext);

  const { customer } = route.params;

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => { 
        getCustomerOrder(customer.id);
      }, 2000);
    }, [])
  );

  const reload = () => {
    setLoadOrder(true);
    setTimeout(() => { 
      getCustomerOrder(customer.id)
      setLoadOrder(false);
    }, 2000);
  }

  const search = (text) => {
    setCustomerOrder(customerOrderBackUp.filter(item => item.token.toLocaleLowerCase().includes(text.toLocaleLowerCase())));
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
      {customerOrder !== null
        &&
        strlen(customerOrder) > 0
        ?
      
       <>
         
          <CustomerOrderList
            data={customerOrder}
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
          customerOrder == null
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
 {
         customerOrder == ""
         &&
         <View style={{flex: 1}}></View>
       }
          <CustomerOrderHistory onPress={() => navigation.navigate("CustomerOrderHistory", {
                  customer: customer, navigation: navigation
                })}>
            <Text color="white" variant="label">Customer Past Orders</Text>
            <Arrow name="up" />
          </CustomerOrderHistory>
      
    </SafeArea>
  )
};