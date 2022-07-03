import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../../../hooks/ScaleSize';
import {COLOR} from '../../../../utils';

const styles = StyleSheet.create({
  inputView: {
    width: scale(692),
    height: verticalScale(30),
    paddingHorizontal: scale(50),
    marginBottom: verticalScale(40),
  },
  titleInput: {
    fontSize: scale(15),
    color: 'grey',
  },
  textInput: {
    width: scale(320),
    height: verticalScale(45),
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: scale(13),
    color: COLOR.Black,
    borderBottomWidth: scale(1),
    borderBottomColor: COLOR.Grey,
  },
});

export default styles;
