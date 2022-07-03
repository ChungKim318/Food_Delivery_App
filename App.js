/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {Provider, useSelector} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './src/routers';
import {navigationRef1} from './src/routers/NavigationService';
import NetInfo from '@react-native-community/netinfo';
import InternetScreen from './src/screens/internet';
import store from './src/redux/store';
import SplashScreen from './src/screens/splash';
import {LogBox, View} from 'react-native';
import ModalNotification from './src/components/modalNotification';
import {Provider as ProviderCategory} from './src/contexts/categoryContext';

LogBox.ignoreLogs(["exported from 'deprecated-react-native-prop-types'."]);

function App1() {
  // const [internet, setInterNet] = useState(true);
  // useEffect(() => {
  //   const unsubscribe = NetInfo.addEventListener(state => {
  //     setInterNet(state.isConnected);
  //   });

  //   return () => {
  //     unsubscribe?.();
  //   };
  // }, [internet]);

  const isLoading = useSelector(state => state.appLoadingReducer.isLoading);
  const isActive = useSelector(
    state => state.modalNotificationReducer.isActive,
  );

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef1}>
        <View style={{flex: 1, opacity: isActive ? 0.6 : 1}}>
          <MainStackNavigator />
        </View>

        {/* {!internet && <InternetScreen />} */}
        {!!isLoading && <SplashScreen />}
        <ModalNotification />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default function App() {
  return (
    <ProviderCategory>
      <Provider store={store}>
        <App1 />
      </Provider>
    </ProviderCategory>
  );
}
