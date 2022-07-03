import React, {useEffect, useState} from 'react';
import {Image, ScrollView, View} from 'react-native';
import Swiper from 'react-native-swiper';
import Animated, {
  useAnimatedStyle,
  interpolate,
  useSharedValue,
  useDerivedValue,
  withRepeat,
  withTiming,
  useCode,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

import {scale, verticalScale} from '../../../../hooks/ScaleSize';
import styles from './styles';

const Banner = props => {
  const [bannerData, setBannerData] = useState([]);
  const rotateImage = useSharedValue(0);

  const rotation = useDerivedValue(() => {
    return interpolate(rotateImage.value, [0, 1], [0, 2 * Math.PI]);
  });

  const animationRotateStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: rotation.value + 'rad'}],
    };
  });

  const scrollHandler = useAnimatedScrollHandler(e => {
    //console.log('yyyyyyyyyyy', e.contentOffset.y);
  });

  useEffect(() => {
    setBannerData(props?.product?.images);
    return () => {
      setBannerData([]);
    };
  }, []);

  useEffect(() => {
    if (!!bannerData?.length) {
      rotateImage.value = withRepeat(
        withTiming(1, {duration: 3000}),
        -1,
        false,
      );
    }
  }, [bannerData]);

  return (
    <ScrollView onScroll={scrollHandler}>
      <View style={styles.container}>
        <View style={styles.banner}>
          <Swiper
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={2}
            height={verticalScale(320)}>
            {bannerData?.map(item => {
              return (
                <View key={item} style={styles.imageView}>
                  <Animated.Image
                    style={[styles.image, animationRotateStyle]}
                    resizeMode="contain"
                    source={item}
                  />
                </View>
              );
            })}
          </Swiper>
        </View>
      </View>
    </ScrollView>
  );
};

export default Banner;
