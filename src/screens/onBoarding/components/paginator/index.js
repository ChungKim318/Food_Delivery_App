import React from 'react';
import {View} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {windowWidth} from '../../../../constants/Values';
import styles from './styles';

const Paginator = ({data, translateX}) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        const translateXStyle = useAnimatedStyle(() => {
          const inputRange = [
            (index - 1) * windowWidth,
            index * windowWidth,
            (index + 1) * windowWidth,
          ];
          const width = interpolate(
            translateX.value,
            inputRange,
            [15, 30, 15],
            Extrapolate.CLAMP,
          );
          const opacity = interpolate(
            translateX.value,
            inputRange,
            [0.5, 1, 0.5],
            Extrapolate.CLAMP,
          );
          const borderRadius = interpolate(
            translateX.value,
            inputRange,
            [7.5, 10, 7.5],
            Extrapolate.CLAMP,
          );

          return {
            borderRadius,
            opacity,
            width,
          };
        });
        return (
          <Animated.View
            key={index.toString()}
            style={[styles.dot, translateXStyle]}
          />
        );
      })}
    </View>
  );
};

export default Paginator;
