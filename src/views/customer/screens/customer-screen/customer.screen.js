import React, {useContext, useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { Searchbar } from "react-native-paper";
import { CustomerIcon, CustomerList, CustomerManagement, Arrow, SearchContainer} from './customer-screen.styles';
import {Text} from "../../../../components/typography/text.component";
import { CustomerInfoCard } from "../../components/customer-info-card/customer-info-card.component";
import { CustomerContext } from "../../context/customer.context";
import { IsLoading } from '../../../../components/loading/loading.component';
import { ErrorContainer } from '../../../../components/utility/error.component.styles';
import { strlen } from '../../../../components/utility/functions';
import { FadeInView } from '../../../../components/animations/fade.animation';

export const CustomerScreen = ({navigation}) => {
 
  const { customers, authorization, getCustomers, loading, setCustomers, customersBackUp } = useContext(CustomerContext);
  const [loadCustomer, setLoadCustomer] = useState(false);


  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => { 
        getCustomers();
      }, 2000);
    }, [])
  );

  const reload = () => {
    setLoadCustomer(true);
    setTimeout(() => { 
      getCustomers();
      setLoadCustomer(false);
    }, 2000);
  }

  const search = (text) => {
    setCustomers(customersBackUp.filter(item => item.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())));
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
      {customers !== null
        &&
        strlen(customers) > 0
        ?
       <>
          <CustomerList
            data={customers}
            onRefresh={reload}
            refreshing={loading}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate("CustomerOrders", {
                customer: item,
              })}>
                <FadeInView>
                  <CustomerInfoCard customer={item} authorization={authorization} loadCustomer={loadCustomer} />
                </FadeInView>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.name}
          />
          </>
          :
          customers == null
        &&
        <>
        <CustomerList
            data={[{id: 1}]}
            onRefresh={reload}
            refreshing={loading}
            renderItem={({ item }) => (
              <ErrorContainer>
                <CustomerIcon bg="#ccc" icon="close" />
                <Text>No customers yet!</Text>
              </ErrorContainer>
            )}
            keyExtractor={(item) => item.id}
          />
          </>
          }
          {
            (customers == "" && authorization == "2")
            &&
            <View style={{flex: 1}}></View>
          }
          {
            authorization == "2"
            &&
            <CustomerManagement onPress={() => navigation.navigate("CustomerManagement")}>
              <Text color="white" variant="label">Manage Customers</Text>
              <Arrow name="up" />
            </CustomerManagement>
            
          }
        
      
    
    </SafeArea>
  )
};