import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../../../hooks/ScaleSize';
import {COLOR} from '../../../../utils';

const styles = isMore =>
  StyleSheet.create({
    container: {
      width: isMore ? scale(170) : scale(187),
      height: isMore ? verticalScale(300) : verticalScale(240),
      borderRadius: scale(30),
      marginTop: verticalScale(45),
      marginLeft: scale(10),
      elevation: 8,
      backgroundColor: COLOR.White,
      alignItems: 'center',
    },
    image: {
      width: scale(120),
      height: scale(120),
      backgroundColor: 'transparent',
      position: 'absolute',
      top: verticalScale(-40),
      borderRadius: scale(120) / 2,
    },
    card: {
      height: isMore ? verticalScale(150) : verticalScale(110),
      backgroundColor: 'transparent',
      width: scale(177),
      marginBottom: verticalScale(18),
    },
    title: {
      fontFamily: 'SF-Pro-Text-Bold',
      fontSize: scale(14),
      marginLeft: scale(10),
      marginTop: verticalScale(5),
    },
    price: {
      fontFamily: 'SF-Pro-Text-Bold',
      fontSize: scale(15),
      color: COLOR.Orange,
      marginTop: verticalScale(5),
      marginLeft: scale(10),
    },
    infoView: {
      alignItems: 'center',
    },
  });

export default styles;
