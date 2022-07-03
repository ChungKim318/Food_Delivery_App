import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../../../hooks/ScaleSize';
import {COLOR} from '../../../../utils';

const styles = StyleSheet.create({
  container: {
    width: scale(315),
    height: verticalScale(60),
    borderRadius: scale(20),
    marginBottom: verticalScale(20),
    backgroundColor: COLOR.White,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: scale(20),
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: scale(18),
    fontFamily: 'SF-Pro-Text-Bold',
    color: COLOR.Black,
  },
});

export default styles;
