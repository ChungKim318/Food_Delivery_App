import React from 'react';
import LottieView from 'lottie-react-native';
import {View, ImageBackground} from 'react-native';
import styles from './styles';
import {IMAGE} from '../../utils';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={IMAGE.Splash}
      resizeMode="cover"
      style={styles.container}>
      <View style={styles.lottie}>
        <LottieView
          source={require('../../assets/icons/Splash.json')}
          autoPlay
          loop
        />
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;
