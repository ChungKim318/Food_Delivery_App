import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../hooks/ScaleSize';
import {windowWidth, windowHeight} from '../../constants/Values';
import {COLOR} from '../../utils';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: verticalScale(50),
    justifyContent: 'space-between',
    flex: 0.1,
    alignItems: 'center',
  },
  titleView: {
    marginTop: verticalScale(36),
  },
  titleText: {
    fontFamily: 'SF-Pro-Text-Heavy',
    textAlign: 'center',
    fontSize: scale(28),
    color: COLOR.Black,
  },
  priceView: {
    marginTop: verticalScale(10),
  },
  priceText: {
    fontFamily: 'SF-Pro-Text-Bold',
    textAlign: 'center',
    fontSize: scale(20),
    color: COLOR.OrangeRed,
  },
  buttonContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth,
    top: windowHeight * 0.88,
  },
  buttonView: {
    backgroundColor: COLOR.OrangeRed,
    width: scale(331),
    height: verticalScale(50),
    borderRadius: scale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: COLOR.White,
    fontSize: scale(17),
    fontFamily: 'SF-Pro-Text-Bold',
  },
  textNormal: {
    fontSize: scale(15),
    color: COLOR.Black,
  },
  infoContainer: {
    marginTop: verticalScale(42),
    width: scale(310),
  },
});

export default styles;
