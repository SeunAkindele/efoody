import React, {useState, useContext} from "react";
import { useFocusEffect } from '@react-navigation/native';
import{ SvgXml } from "react-native-svg";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { List } from "react-native-paper";
import { OrderButton, Rating, Progress, RatesProgress } from "./menu-detail-screen.styles";
import { MenuInfoCard } from "../../components/menu-info-card/menu-info-card.component";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { strlen, ucFirst } from "../../../../components/utility/functions";
import { Text } from "../../../../components/typography/text.component";
import starSilver from "../../../../../assets/star-silver";
import starGold from "../../../../../assets/star-gold";
import { CartContext } from "../../../cart/context/cart.context";
import { MenuContext } from "../../context/menu.context";

export const MenuDetailScreen = ({ route, navigation }) => {

  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const { menu } = route.params;

  const {addToCart} = useContext(CartContext);
  const {rateItem, ratings, getRatings, loading} = useContext(MenuContext);

  const ratingArray = Array.from(new Array(Math.floor(ratings)));

  const unratedArray = Array.from(new Array(Math.floor(5-ratings)));

  useFocusEffect(
    React.useCallback(() => {
      getRatings(menu.id);
    }, [])
  );

  return (
    <>
      <MenuInfoCard menu={menu} />
      <ScrollView>
        {
          menu.ingredients && strlen(menu.ingredients) > 0
          ?
          <List.Accordion
            title="Ingredients"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          >
          {menu.ingredients.map((item, i) => 
            <List.Item key={i} title={`${ucFirst(item.name)}`} />
          )}
          </List.Accordion>
          :
          <Spacer position="left" size="large">
            <Spacer position="top" size="large" />
            <Text>No ingredients</Text>
          </Spacer>
        }
       
        <Spacer position="right" size="large" />
         <Spacer position="left" size="large">
         <Spacer position="top" size="medium" />
          <Rating>
          
            {
              !loading
              ?
              <>
                {ratingArray.map((__,i) => (
                  <TouchableOpacity onPress={() => rateItem("gold", i + 1, menu.id)} key={i}>
                    <SvgXml xml={starGold} width={25} height={25} />
                  </TouchableOpacity>
                ))}
                {unratedArray.map((__,i) => (
                  <TouchableOpacity onPress={() => rateItem("silver", i + 1, menu.id)} key={i}>
                    <SvgXml xml={starSilver} width={25} height={25} />
                  </TouchableOpacity>
                ))}
              </>
              :
              <Text>*****</Text>
            }
          </Rating>
          <Spacer position="bottom" size="small" />
          <Text variant="caption">Rate {ucFirst(menu.name)}</Text>
          <Spacer position="top" size="medium" />
         
            <RatesProgress>
            <Text variant="label">5</Text>
            <Progress progress={menu.ratings.five} />
          </RatesProgress>
          <RatesProgress>
            <Text variant="label">4</Text>
            <Progress progress={menu.ratings.four} />
            </RatesProgress>
            <Spacer position="bottom" size="small" />
            <RatesProgress>
            <Text variant="label">3</Text>
            <Progress progress={menu.ratings.three} />
            </RatesProgress>
            <Spacer position="bottom" size="small" />
            <RatesProgress>
            <Text variant="label">2</Text>
            <Progress progress={menu.ratings.two} />
            </RatesProgress>
            <Spacer position="bottom" size="small" />
            <RatesProgress>
            <Text variant="label">1</Text>
            <Progress progress={menu.ratings.one} />
            </RatesProgress>
            <Spacer position="bottom" size="small" />
            
          <Spacer position="bottom" size="large" />
        </Spacer>

      </ScrollView>
      <Spacer position="bottom" size="large">
        <OrderButton onPress={() => addToCart(menu.id, navigation)} mode="contained">ADD TO CART</OrderButton>
      </Spacer>
    </>
  )
}