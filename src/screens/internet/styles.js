import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../hooks/ScaleSize';
import {COLOR} from '../../utils';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: scale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: scale(28),
    fontFamily: 'SF-Pro-Text-Bold',
  },
  normalText: {
    fontSize: scale(17),
    fontFamily: 'SF-Pro-Text-Medium',
    marginTop: verticalScale(10),
    color: COLOR.Grey,
  },
  buttonView: {
    width: scale(314),
    height: verticalScale(70),
    borderRadius: scale(30),
    backgroundColor: COLOR.OrangeRed,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(20),
  },
  buttonText: {
    fontSize: scale(17),
    color: COLOR.White,
  },
});

export default styles;
