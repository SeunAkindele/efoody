import React, {useContext, useEffect, useState} from 'react';
import { TouchableOpacity } from 'react-native';
import { Searchbar } from "react-native-paper";
import { SafeArea } from "../../../../components/utility/safe-area.component";

import { StaffOrderIcon, StaffOrderList, SearchContainer } from './admin-staff-order-history.screen.styles';
import {Text} from "../../../../components/typography/text.component";
import { StaffOrderInfoCard } from "../../components/staff-order-info-card/staff-order-info-card.component";
import { StaffContext } from "../../context/staff.context";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { FadeInView } from '../../../../components/animations/fade.animation';
import { IsLoading } from '../../../../components/loading/loading.component';
import { ErrorContainer } from '../../../../components/utility/error.component.styles';
import { strlen } from '../../../../components/utility/functions';

export const AdminStaffOrderHistoryScreen = ({navigation, route}) => {

  const { pastOrder, getStaffPastOrder, pastOrderBackUp, setPastOrder, loading } = useContext(StaffContext);
  const [loadOrder, setLoadOrder] = useState(false);

  const {staff} = route.params;
 
  useEffect(() => {
    getStaffPastOrder(staff.id);
    setLoadOrder(false);
  }, []);

  const reload = () => {
    setLoadOrder(true);
    setTimeout(() => { 
      getStaffPastOrder(staff.id);
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
          <StaffOrderList
            data={pastOrder}
            onRefresh={reload}
            refreshing={loading}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate("StaffOrderDetails", {
                  item: item,
              })} key={item.id}>
                <Spacer position="bottom" size="large">
                <FadeInView>
                    <StaffOrderInfoCard staffOrder={item} loadOrder={loadOrder} />
                  </FadeInView>
                </Spacer>
              </TouchableOpacity>
            )}
          />
         
         
        </>
        :
        pastOrder == null
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
                <Text>No past orders yet!</Text>
              </Spacer>
            </ErrorContainer>
          )}
        />
        
      }
    </SafeArea>
  )
};