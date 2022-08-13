import React, {useContext, useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Searchbar } from "react-native-paper";
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { OrderIcon, OrderList, SearchContainer } from './order-history.screen.styles';
import {Text} from "../../../../components/typography/text.component";
import { OrderInfoCard } from "../../components/order-info-card/order-info-card.component";
import { OrderContext } from "../../context/order.context";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { IsLoading } from '../../../../components/loading/loading.component';
import { ErrorContainer } from '../../../../components/utility/error.component.styles';
import { strlen } from '../../../../components/utility/functions';


export const OrderHistoryScreen = ({navigation}) => {

  const { pastOrder, getPastOrder, pastOrderBackUp, setPastOrder, loading } = useContext(OrderContext);
  const [loadOrder, setLoadOrder] = useState(false);
 
  useFocusEffect(
    React.useCallback(() => {
      setLoadOrder(true);
      setTimeout(() => { 
        getPastOrder();
        setLoadOrder(false);
      }, 2000);
    }, [])
  );

  const reload = () => {
    setLoadOrder(true);
    setTimeout(() => { 
      getPastOrder();
      setLoadOrder(false);
    }, 2000);
  }

  const search = (text) => {
    setPastOrder(pastOrderBackUp.filter(item => item.token.toLocaleLowerCase().includes(text.toLocaleLowerCase())));
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
      {pastOrder !== null
        &&
        strlen(pastOrder) > 0
        ?
       <>
          <OrderList
            data={pastOrder}
            onRefresh={reload}
            refreshing={loading}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate("OrderDetails", {
                  item: item,
              })} key={item.id}>
                <Spacer position="bottom" size="large">
                  <OrderInfoCard item={item} loadOrder={loadOrder} />
                </Spacer>
              </TouchableOpacity>
            )}
          />
         
         
        </>
        :
        pastOrder == null
        &&
        <OrderList
          data={[{id: 1}]}
          onRefresh={reload}
          refreshing={loading}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ErrorContainer>
              <OrderIcon bg="#ccc" icon="close" />
              <Spacer position="bottom" size="large">
                <Text>No past orders yet!</Text>
              </Spacer>
            </ErrorContainer>
          )}
        />
        
      }
      
    </SafeArea>
  )
};