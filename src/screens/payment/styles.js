import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../hooks/ScaleSize';
import {COLOR} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  titleView: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: scale(50),
  },
  paymentView: {
    flex: 3,
  },
  deliveryView: {
    flex: 2,
    marginTop: verticalScale(10),
  },
  priceView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonView: {
    flex: 1,
  },
  titleText: {
    fontSize: scale(34),
    fontFamily: 'SF-Pro-Text-Heavy',
    color: COLOR.Black,
  },
  totalText: {
    fontSize: scale(17),
    color: COLOR.Black,
  },
  priceText: {
    fontSize: scale(22),
    color: COLOR.Black,
    fontFamily: 'SF-Pro-Text-Bold',
  },
  title2Text: {
    fontSize: scale(17),
    color: COLOR.Black,
    marginVertical: verticalScale(5),
    marginLeft: scale(50),
    fontFamily: 'SF-Pro-Text-Bold',
  },
});

export default styles;
