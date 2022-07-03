import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../hooks/ScaleSize';
import {windowWidth} from '../../constants/Values';
import {COLOR} from '../../utils';

const styles = isLogin =>
  StyleSheet.create({
    header: {
      width: windowWidth,
      height: verticalScale(382),
      backgroundColor: COLOR.White,
      borderRadius: scale(30),
    },
    image: {
      width: scale(128),
      height: verticalScale(164),
      marginLeft: scale(136),
      marginTop: verticalScale(110),
      resizeMode: 'contain',
    },
    titleContainer: {
      flexDirection: 'row',
      marginTop: verticalScale(55),
      height: verticalScale(21),
    },
    titleView: {
      width: scale(207),
      alignItems: 'center',
    },
    titleText: {
      width: scale(71),
      height: verticalScale(24),
      fontFamily: 'SF-Pro-Text-Bold',
      fontSize: scale(17),
      lineHeight: verticalScale(24),
      color: COLOR.Black,
    },
    lineContainer: {
      flexDirection: 'row',
      marginTop: verticalScale(27),
    },
    line: {
      width: scale(132),
      height: verticalScale(3),
      backgroundColor: isLogin ? COLOR.OrangeRed : 'transparent',
    },
    bodyContainer: {
      marginTop: verticalScale(45),
      height: verticalScale(450),
    },
  });

export default styles;
