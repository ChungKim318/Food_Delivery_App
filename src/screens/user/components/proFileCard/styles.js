import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../../../hooks/ScaleSize';
import {COLOR} from '../../../../utils';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
  profileCardContainer: {
    width: scale(320),
    height: verticalScale(220),
    padding: scale(10),
    flexDirection: 'row',
    backgroundColor: COLOR.White,
    boxShadow: (0, 10, 40, COLOR.White),
    borderRadius: scale(20),
  },
  imageUser: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(10),
    backgroundColor: 'transparent',
  },
  nameText: {
    fontSize: scale(17),

    fontFamily: 'SF-Pro-Text-Bold',
    color: COLOR.Black,
    width: scale(160),
  },
  contentText: {
    fontSize: scale(14),
    fontFamily: 'SF-Pro-Text-Bold',
    color: COLOR.Black,
    marginTop: verticalScale(2),
    width: scale(160),
  },
  line: {
    width: scale(160),
    height: verticalScale(1),
    marginVertical: verticalScale(2),
    backgroundColor: COLOR.Grey,
  },
  contentContainer: {
    marginLeft: scale(16),
  },
});

export default styles;
