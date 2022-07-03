import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabMainNavigator from './TabMainNavigator';
import ScreenName from '../constants/ScreenName';
import {default as ProductDetailScreen} from '../screens/productDetail';
import MoreProductScreen from '../screens/productsContainer/moreProduct/MoreProductScreen';

const Stack = createNativeStackNavigator();
function StackMainProductDetailNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenName.TAB_MAIN_SCREEN}
        component={TabMainNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenName.PRODUCT_DETAIL_SCREEN}
        component={ProductDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenName.MORE_PRODUCT_SCREEN}
        component={MoreProductScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default StackMainProductDetailNavigator;
