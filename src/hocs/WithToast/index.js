import React, {useCallback, useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

const WithToast = WrappedComponent => props => {
  const [type, setType] = useState('success');
  const changeTypeStatus = useCallback(type => setType(type), []);

  const [productName, setProductName] = useState('');
  const changeProductName = useCallback(name => setProductName(name), []);

  const translateY = useSharedValue(0);

  const translateYStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  const startToast = () => {
    translateY.value = withSequence(
      withTiming(150, {duration: 1000}),
      withTiming(0, {duration: 3000}),
    );
  };

  return (
    <>
      <Animated.View style={[styles().container, translateYStyle]}>
        <View style={styles().toastView}>
          <View style={styles(type).statusView} />
          <Text style={styles().messageText}>{`${
            type == 'success'
              ? 'Thêm thành công vào giỏ sản phẩm'
              : 'Đã xóa khỏi giỏ sản phẩm'
          } ${productName}`}</Text>
        </View>
      </Animated.View>

      <WrappedComponent
        {...props}
        changeTypeStatus={changeTypeStatus}
        changeProductName={changeProductName}
        startToast={startToast}
      />
    </>
  );
};

export default WithToast;
