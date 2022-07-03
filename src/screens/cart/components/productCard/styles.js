import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../../../hooks/ScaleSize';
import {COLOR} from '../../../../utils';

const styles = StyleSheet.create({
  cardView: {
    width: scale(320),
    height: verticalScale(115),
    backgroundColor: COLOR.White,
    marginBottom: verticalScale(10),
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: scale(30),
  },
  imageView: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: scale(30),
    borderBottomLeftRadius: scale(30),
  },
  infoView: {
    flex: 3,
    borderTopRightRadius: scale(30),
    borderBottomRightRadius: scale(30),
  },
  image: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(50),
  },
  nameText: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: scale(17),
    paddingHorizontal: scale(10),
  },
  priceText: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: scale(15),
    paddingHorizontal: scale(10),
    color: COLOR.OrangeRed,
  },
  buttonView: {
    position: 'absolute',
    flexDirection: 'row',
    width: scale(70),
    height: verticalScale(30),
    backgroundColor: COLOR.OrangeRed,
    borderRadius: scale(30),
    bottom: 10,
    right: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: scale(15),
    color: COLOR.White,
  },
  iconView: {
    position: 'absolute',
    width: scale(160),
    height: scale(95),
    right: scale(60),
    borderRadius: scale(30),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    width: scale(70),
    height: scale(70),
    backgroundColor: COLOR.Red,
    borderRadius: scale(35),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
