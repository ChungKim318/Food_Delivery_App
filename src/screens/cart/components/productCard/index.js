import React, {memo, useCallback, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {formatPrice} from '../../../../helpers';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {scale} from '../../../../hooks/ScaleSize';
import {COLOR} from '../../../../utils';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

const ProductCart = ({
  item,
  index,
  addProductToCart,
  minusProductToCart,
  removeProductToCart,
  onSharing,
}) => {
  const translateX = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler({
    onActive: event => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      translateX.value = withTiming(0, {duration: 5000});
    },
  });
  const translateXStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  return (
    <GestureHandlerRootView>
      <View style={styles.iconView}>
        <TouchableOpacity style={styles.icon} onLongPress={onSharing}>
          <AntDesign name="hearto" size={scale(45)} color={COLOR.White} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => removeProductToCart({product: item})}>
          <AntDesign name="delete" size={scale(45)} color={COLOR.White} />
        </TouchableOpacity>
      </View>
      <PanGestureHandler onGestureEvent={panGesture}>
        <Animated.View style={[styles.cardView, translateXStyle]}>
          <View style={styles.imageView}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.infoView}>
            <Text style={styles.nameText} numberOfLines={2}>
              {item.name}
            </Text>
            <Text style={styles.priceText}>${formatPrice(item.price)}</Text>
            <View style={styles.buttonView}>
              <TouchableOpacity
                onPress={() => minusProductToCart({product: item})}>
                <AntDesign name="minus" size={scale(15)} color={COLOR.White} />
              </TouchableOpacity>
              <Text style={styles.buttonText}>{item.count}</Text>
              <TouchableOpacity
                onPress={() => addProductToCart({product: item})}>
                <AntDesign name="plus" size={scale(15)} color={COLOR.White} />
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default memo(ProductCart);
