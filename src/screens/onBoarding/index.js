import React from 'react';
import {View} from 'react-native';

import styles from './styles';

import {IMAGE} from '../../utils';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import ScreenCustom from './components/screenCustom';
import Paginator from './components/paginator';
import ScreenCustomMain from './components/screenCustomMain';
import {WithCheckConnection} from '../../hocs';

const OnBoardingScreen = props => {
  const data = [0, 1, 2];
  const translateX = useSharedValue(0);

  const scrollViewHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });
  return (
    <View style={styles.container}>
      <Animated.ScrollView
        style={styles.container}
        horizontal
        bounces
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={scrollViewHandler}>
        <ScreenCustom
          uri={IMAGE.OnBoarding1}
          translateX={translateX}
          index={0}
        />
        <ScreenCustom
          uri={IMAGE.OnBoarding2}
          translateX={translateX}
          index={1}
        />
        <ScreenCustomMain
          translateX={translateX}
          index={2}
          navigation={props.navigation}
        />
      </Animated.ScrollView>
      <View style={styles.paginator}>
        <Paginator data={data} translateX={translateX} />
      </View>
    </View>
  );
};

export default WithCheckConnection(OnBoardingScreen);
