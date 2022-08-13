import React, {useContext, useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { StaffOrderList, StaffOrderHistory, Arrow, Progress, Refresh, SearchContainer, StaffOrderIcon } from './staff-order-screen.styles';
import { Searchbar } from "react-native-paper";
import {Text} from "../../../../components/typography/text.component";
import { StaffOrderInfoCard } from "../../components/staff-order-info-card/staff-order-info-card.component";
import { StaffContext } from "../../context/staff.context";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { FadeInView } from "../../../../components/animations/fade.animation";
import { IsLoading } from '../../../../components/loading/loading.component';
import { ErrorContainer } from '../../../../components/utility/error.component.styles';
import { strlen } from '../../../../components/utility/functions';

export const StaffOrderScreen = ({navigation}) => {
  

  const { order, getOrder, loading, pending, orderBackUp, setOrder } = useContext(StaffContext);
  const [loadOrder, setLoadOrder] = useState(false);


  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => { 
        getOrder();
      }, 2000);
    }, [])
  );


  const reload = () => {
    setLoadOrder(true);
    setTimeout(() => { 
      getOrder();
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
                <TouchableOpacity onPress={() => navigation.navigate("StaffOrderDetails", {
                  item: item, navigation: navigation
                })} key={item.id}>
                  <FadeInView>
                    <StaffOrderInfoCard staffOrder={item} loadOrder={loadOrder} />
                  </FadeInView>
                </TouchableOpacity>
              </Spacer>
            )}
          />
          {(pending.includes("2") || pending.includes("1")) &&
          <>
            <Refresh name="ios-refresh-circle" onPress={() => reload()} />
           
          </>}
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
          <StaffOrderHistory onPress={() => navigation.navigate("StaffOrderHistory")}>
            <Text color="white" variant="label">Past Orders</Text>
            <Arrow name="up" />
          </StaffOrderHistory>
        
    </SafeArea>
  )
};