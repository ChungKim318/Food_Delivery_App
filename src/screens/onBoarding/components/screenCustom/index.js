import {transform} from '@babel/core';
import React from 'react';
import {View} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {windowWidth} from '../../../../constants/Values';
import styles from './styles';

const ScreenCustom = ({uri, index, translateX}) => {
  const translateXStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * windowWidth,
      index * windowWidth,
      (index + 1) * windowWidth,
    ];
    const scale = interpolate(translateX.value, inputRange, [0, 1, 0]);
    const rotateY = interpolate(translateX.value, inputRange, [-90, 0, 90]);
    return {
      transform: [{scale}, {rotateY: `${rotateY}deg`}],
    };
  });
  return (
    <View style={styles.container}>
      <Animated.Image
        source={uri}
        style={[styles.image, translateXStyle]}
        resizeMode="cover"
      />
    </View>
  );
};

export default ScreenCustom;
