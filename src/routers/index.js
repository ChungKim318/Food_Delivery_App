import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {default as AuthScreen} from '../screens/auth';
import ScreenName from '../constants/ScreenName';
import StackMainProductDetailNavigator from './StackMainProductDetailNavigator';
import {default as OnBoardingScreen} from '../screens/onBoarding';
import PaymentScreen from '../screens/payment';

const Stack = createNativeStackNavigator();
function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenName.ONBOARDING_SCREEN}
        component={OnBoardingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenName.AUTH_SCREEN}
        component={AuthScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenName.STACK_MAIN_PRODUCT_DETAIL_SCREEN}
        component={StackMainProductDetailNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenName.PAYMENT_SCREEN}
        component={PaymentScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
