import React, {useContext, useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { StaffOrderList, StaffOrderHistory, Arrow, SearchContainer, StaffOrderIcon } from './admin-staff-order-screen.styles';
import { Searchbar } from "react-native-paper";
import {Text} from "../../../../components/typography/text.component";
import { StaffOrderInfoCard } from "../../components/staff-order-info-card/staff-order-info-card.component";
import { StaffContext } from "../../context/staff.context";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { FadeInView } from "../../../../components/animations/fade.animation";
import { IsLoading } from '../../../../components/loading/loading.component';
import { ErrorContainer } from '../../../../components/utility/error.component.styles';
import { strlen } from '../../../../components/utility/functions';

export const AdminStaffOrderScreen = ({navigation, route}) => {

  const { order, getStaffOrder, loading, orderBackUp, setOrder } = useContext(StaffContext);
  const [loadOrder, setLoadOrder] = useState(false);

  const {staff} = route.params;

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => { 
        getStaffOrder(staff.id);
      }, 2000);
    }, [])
  );

  const reload = () => {
    setLoadOrder(true);
    setTimeout(() => { 
      getStaffOrder(staff.id);
      setLoadOrder(false);
    }, 2000);
  }


  const search = (text) => {
    setOrder(orderBackUp.filter(item => item.token.toLocaleLowerCase().includes(text.toLocaleLowerCase())));
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
        {order !== null
        &&
        strlen(order) > 0
        ?
        <>
          
          <StaffOrderList
            data={order}
            onRefresh={reload}
            refreshing={loading}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Spacer position="bottom" size="large">
                <TouchableOpacity onPress={() => navigation.navigate("AdminStaffOrderDetailsScreen", {
                  item: item, navigation: navigation
                })} key={item.id}>
                  <FadeInView>
                    <StaffOrderInfoCard staffOrder={item} loadOrder={loadOrder} />
                  </FadeInView>
                </TouchableOpacity>
              </Spacer>
            )}
          />
         
          </>
           :
           order == null
           &&
           <StaffOrderList
           data={[{id: 1}]}
           onRefresh={reload}
           refreshing={loading}
           keyExtractor={(item) => item.id}
           renderItem={({ item }) => (
             <ErrorContainer>
               <StaffOrderIcon bg="#ccc" icon="close" />
               <Spacer position="bottom" size="large">
                 <Text>No orders today yet!</Text>
                 <Text>Drag down to Refresh</Text>
               </Spacer>
             </ErrorContainer>
           )}
         />
         
       }
       {
         order == ""
         &&
         <View style={{flex: 1}}></View>
       }
        <StaffOrderHistory onPress={() => navigation.navigate("AdminStaffOrderHistoryScreen", {
                staff: staff, navigation: navigation
              })}>
          <Text color="white" variant="label">Staff Past Orders</Text>
          <Arrow name="up" />
        </StaffOrderHistory>
        
    </SafeArea>
  )
};