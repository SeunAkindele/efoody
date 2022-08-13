import React, {useContext, useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { Searchbar } from "react-native-paper";
import { StaffIcon, StaffList, StaffManagement, Arrow, SearchContainer} from './staff-screen.styles';
import {Text} from "../../../../components/typography/text.component";
import { StaffInfoCard } from "../../components/staff-info-card/staff-info-card.component";
import { StaffContext } from "../../context/staff.context";
import { IsLoading } from '../../../../components/loading/loading.component';
import { ErrorContainer } from '../../../../components/utility/error.component.styles';
import { strlen } from '../../../../components/utility/functions';

export const StaffScreen = ({navigation}) => {
 
  const { staffs, loading, getStaffs, setStaffs, staffsBackUp } = useContext(StaffContext);

  const [loadStaff, setLoadStaff] = useState(false);


  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => { 
        getStaffs();
      }, 2000);
    }, [])
  );

  const reload = () => {
    setLoadStaff(true);
    setTimeout(() => { 
      getStaffs();
      setLoadStaff(false);
    }, 2000);
  }

  const search = (text) => {
    setStaffs(staffsBackUp.filter(item => item.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())));
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
      {staffs !== null
        &&
        strlen(staffs) > 0
        ?
       <>
          <StaffList
            data={staffs}
            onRefresh={reload}
            refreshing={loading}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate("AdminStaffOrderScreen", {
                staff: item, navigation: navigation
              })}>
                <StaffInfoCard staff={item} loadStaff={loadStaff} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
          </>
          :
          staffs == null
        &&
        <>
        <StaffList
            data={[{id: 1}]}
            onRefresh={reload}
            refreshing={loading}
            renderItem={({ item }) => (
              <ErrorContainer>
                <StaffIcon bg="#ccc" icon="close" />
                <Text>No staffs yet!</Text>
              </ErrorContainer>
            )}
            keyExtractor={(item) => item.id}
          />
          </>
          }
          {
            staffs == ""
            &&
            <View style={{flex: 1}}></View>
          }
         
            <StaffManagement onPress={() => navigation.navigate("StaffManagement")}>
              <Text color="white" variant="label">Manage Staffs</Text>
              <Arrow name="up" />
            </StaffManagement>
            
          
      
    </SafeArea>
  )
};