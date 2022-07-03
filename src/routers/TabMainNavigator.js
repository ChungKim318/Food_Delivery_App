import React, {useEffect, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {windowWidth} from '../constants/Values';
import ScreenName from '../constants/ScreenName';
import LoveScreen from '../screens/love';
import UserScreen from '../screens/user';
import {scale, verticalScale} from '../hooks/ScaleSize';
import {default as ProductsContainerScreen} from '../screens/productsContainer';
import {COLOR} from '../utils';
import CartScreen from '../screens/cart';

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef();

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({0: {scale: 1}, 1: {scale: 1.3}});
    } else {
      viewRef.current.animate({0: {scale: 1.3}, 1: {scale: 1}});
    }
  }, [focused]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={onPress} activeOpacity={1}>
        <Animatable.View
          ref={viewRef}
          duration={1000}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: windowWidth * 0.15,
            height: 0,
            borderColor: 'transparent',
            backgroundColor: 'transparent',
          }}>
          <item.type
            name={item.activeIcon}
            size={scale(24)}
            color={focused ? COLOR.OrangeRed : COLOR.Grey}
          />
        </Animatable.View>
      </TouchableOpacity>
    </View>
  );
};

const tabArr = [
  {
    route: ScreenName.HOME_SCREEN,
    label: 'Home',
    type: Entypo,
    activeIcon: 'home',
    hiddenTabBar: false,
    component: ProductsContainerScreen,
  },
  {
    route: ScreenName.LOVE_SCREEN,
    label: 'Love',
    type: AntDesign,
    activeIcon: 'hearto',
    hiddenTabBar: false,
    component: LoveScreen,
  },
  {
    route: ScreenName.USER_SCREEN,
    label: 'User',
    type: Feather,
    activeIcon: 'user',
    hiddenTabBar: true,
    component: UserScreen,
  },
  {
    route: ScreenName.CART_SCREEN,
    label: 'Cart',
    type: Entypo,
    activeIcon: 'back-in-time',
    hiddenTabBar: false,
    component: CartScreen,
  },
];

const BottomTab = createBottomTabNavigator();
function TabMainNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        keyboardHidesTabBar: true,
        showLabel: false,
        tabBarStyle: {
          height: verticalScale(40),
          position: 'absolute',
          bottom: verticalScale(18),
          right: verticalScale(18),
          left: verticalScale(18),
          backgroundColor: 'transparent',
          shadowColor: 'transparent',
        },
      }}>
      {tabArr?.map((item, index) => {
        return (
          <BottomTab.Screen
            key={index.toString()}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: true,
              tabBarStyle: {display: item.hiddenTabBar ? 'none' : 'flex'},
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </BottomTab.Navigator>
  );
}

export default TabMainNavigator;
