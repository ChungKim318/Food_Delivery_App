import {StyleSheet} from 'react-native';
import {windowWidth} from '../../constants/Values';
import {scale, verticalScale} from '../../hooks/ScaleSize';
import {COLOR} from '../../utils';

const styles = type =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      height: verticalScale(100),
      width: windowWidth,
      alignItems: 'center',
      top: -100,
      zIndex: 100,
    },
    toastView: {
      height: '100%',
      width: '90%',
      backgroundColor: COLOR.OrangeRed,
      flexDirection: 'row',
    },
    statusView: {
      height: '100%',
      width: scale(8),
      backgroundColor: type == 'success' ? COLOR.Lime : COLOR.Red,
    },
    messageText: {
      padding: scale(15),
      textAlign: 'center',
      fontSize: scale(15),
      alignSelf: 'center',
      fontFamily: 'SF-Pro-Text-Regular',
      color: COLOR.White,
    },
  });

export default styles;
