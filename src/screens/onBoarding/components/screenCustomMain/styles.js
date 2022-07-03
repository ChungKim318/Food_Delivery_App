import {StyleSheet} from 'react-native';
import {COLOR} from '../../../../utils';
import {scale, verticalScale} from '../../../../hooks/ScaleSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.OrangeRed,
  },
  logo: {
    width: scale(73),
    height: scale(73),
    borderRadius: scale(73 / 2),
    marginTop: verticalScale(50),
    marginLeft: scale(50),
  },
  titleText: {
    fontSize: scale(65),
    marginLeft: scale(50),
    color: COLOR.White,
    fontFamily: 'SF-Pro-Text-Bold',
  },
  image1: {
    width: scale(414),
    height: verticalScale(434),
  },
  image2: {
    width: scale(225),
    height: verticalScale(298),
  },
  titleView: {
    marginTop: verticalScale(20),
  },
});

export default styles;
