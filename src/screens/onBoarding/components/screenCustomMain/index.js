import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import {IMAGE, LOGO} from '../../../../utils';
import styles from './styles';
import {ButtonCustom} from '../../../../components';
import Animated, {useAnimatedStyle, interpolate} from 'react-native-reanimated';
import {windowWidth} from '../../../../constants/Values';
import {useDispatch} from 'react-redux';
import {
  onIsLoadingFalse,
  onIsLoadingTrue,
} from '../../../../redux/actions/appLoadingAction';
import ScreenName from '../../../../constants/ScreenName';

const ScreenCustomMain = ({index, translateX, navigation}) => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);

  const onGetStart = () => {
    dispatch(onIsLoadingTrue());
    setTimeout(() => {
      dispatch(onIsLoadingFalse());
      navigation.replace(ScreenName.AUTH_SCREEN);
    }, 3000);
  };

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
    <Animated.View style={[styles.container, translateXStyle]}>
      <Image source={LOGO.Main} resizeMode="stretch" style={styles.logo} />
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{`Food for \nEveryone `}</Text>
      </View>

      <Image
        source={IMAGE.OnBoarding3}
        style={styles.image1}
        resizeMode="stretch"
      />

      <ButtonCustom
        title={'Get started'}
        onPress={() => onGetStart()}
        colorButton={COLOR.White}
        colorText={COLOR.OrangeRed}
      />
    </Animated.View>
  );
};

export default ScreenCustomMain;
