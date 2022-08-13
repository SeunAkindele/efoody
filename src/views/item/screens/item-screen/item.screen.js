import React, { useContext, useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { ItemInfoCard } from "../../components/item-info-card/item-info-card.component";
import { Spacer } from "../../../../components/spacer/spacer.component";
import {Text} from "../../../../components/typography/text.component";
import { SearchContainer, ItemList, ItemManagement, Arrow, ItemIcon} from "./item-screen.styles";
import { ItemContext } from "../../context/item.context";
import { FadeInView } from "../../../../components/animations/fade.animation";
import { IsLoading } from "../../../../components/loading/loading.component";
import { ErrorContainer } from "../../../../components/utility/error.component.styles";
import { strlen } from "../../../../components/utility/functions";

export const ItemScreen = ({ navigation }) => {
  const { loading, getItems, data, setData, dataBackUp } = useContext(ItemContext);

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => { 
        getItems();
      }, 2000);
    }, [])
  );

  const refresh = () => {
    setTimeout(() => { 
      getItems();
    }, 2000);
  }

  const search = (text) => {
    setData(dataBackUp.filter(item => item.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())));
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
        {data !== null
        &&
        strlen(data) > 0
        ?
        <>
      <ItemList
        data={data}
        onRefresh={refresh}
        refreshing={loading}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("ItemDetails", {
            item: item,
          })}>
            <Spacer position="bottom" size="large">
              <FadeInView>
                <ItemInfoCard item={item} />
              </FadeInView>
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      /> 
      </>
      :
      
        data === null
        &&
      <ItemList
          data={[{id: 1}]}
          keyExtractor={(item) => item.id}
          onRefresh={refresh}
          refreshing={loading}
          renderItem={({ item }) => (
            <ErrorContainer>
              <Spacer position="bottom" size="large">
                <Text variant="error">No Items Yet</Text>
              </Spacer>
              <ItemIcon bg="#ccc" icon="close" />
            </ErrorContainer>
          )}
        />
      }
          {
            data == "" 
            &&
            <View style={{flex: 1}}></View>
          }
       <ItemManagement onPress={() => navigation.navigate("ItemManagement")}>
          <Text color="white" variant="label">Manage Items</Text>
          <Arrow name="up" />
        </ItemManagement>
    </SafeArea>
  );
};