import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../hooks/ScaleSize';
import {COLOR} from '../../utils';

const styles = StyleSheet.create({
  header: {
    marginTop: verticalScale(30),
    paddingHorizontal: scale(50),
  },
  titleView: {
    marginTop: verticalScale(15),
    paddingHorizontal: scale(50),
  },
  titleText: {
    fontSize: scale(30),
    fontFamily: 'SF-Pro-Text-Bold',
    color: COLOR.Black,
  },
  title1View: {
    marginTop: verticalScale(25),
    paddingHorizontal: scale(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title1Text: {
    fontSize: scale(18),
    fontFamily: 'SF-Pro-Text-Bold',
    color: COLOR.Black,
  },
  profileCardContainer: {
    width: scale(320),
    height: verticalScale(220),
    padding: scale(10),
    flexDirection: 'row',
    backgroundColor: COLOR.Black,
    boxShadow: (0, 10, 40, 'rgb(0,0,0,0.03)'),
    borderRadius: scale(20),
  },

  buttonContainer: {
    position: 'absolute',
    bottom: verticalScale(10),
  },
  buttonView: {
    position: 'absolute',
    width: scale(314),
    height: verticalScale(70),
    left: scale(50),
    bottom: verticalScale(10),
    backgroundColor: COLOR.OrangeRed,
    borderRadius: scale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontSize: scale(17),
    color: COLOR.White,
  },
  textChange: {
    fontSize: scale(15),
    color: COLOR.OrangeRed,
  },

  listButtonContainer: {
    marginTop: verticalScale(20),
    alignItems: 'center',
    height: verticalScale(320),
  },
});

export default styles;
