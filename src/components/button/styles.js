import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../hooks/ScaleSize';
import {COLOR} from '../../utils';

const styles = (colorButton, colorText) =>
  StyleSheet.create({
    button: {
      position: 'absolute',
      width: scale(314),
      height: verticalScale(70),
      left: scale(50),
      bottom: verticalScale(25),
      backgroundColor: !!colorButton ? colorButton : COLOR.OrangeRed,
      borderRadius: scale(30),
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      position: 'absolute',
      bottom: verticalScale(10),
    },
    buttonText: {
      fontFamily: 'SF-Pro-Text-Heavy',
      fontSize: scale(17),
      color: !!colorText ? colorText : COLOR.White,
    },
  });

export default styles;
