import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../hooks/ScaleSize';
import {COLOR} from '../../utils';

const styles = type =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      height: verticalScale(322),
      width: scale(315),
      backgroundColor: COLOR.White,
      borderRadius: scale(30),
    },
    titleView: {
      flex: 1,
      backgroundColor:
        (type == 'success' && COLOR.Lime) ||
        (type == 'error' && COLOR.Red) ||
        COLOR.Grey,
      borderTopLeftRadius: scale(30),
      borderTopRightRadius: scale(30),
      justifyContent: 'center',
      paddingHorizontal: scale(20),
    },
    titleText: {
      fontSize: scale(20),
      fontFamily: 'SF-Pro-Text-Bold',
      color: COLOR.Black,
    },
    bodyView: {
      flex: 4,
      backgroundColor: 'transparent',
    },
    messageView: {
      flex: 2,
      paddingHorizontal: scale(20),
      justifyContent: 'center',
    },
    buttonView: {
      flex: 1,
      borderBottomLeftRadius: scale(30),
      borderBottomRightRadius: scale(30),
      flexDirection: 'row',
      marginHorizontal: scale(20),
    },
    cancelButtonView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: verticalScale(10),
    },
    acceptButtonView: {
      flex: 1,
      backgroundColor: COLOR.OrangeRed,
      borderRadius: scale(30),
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: verticalScale(10),
    },
    textCancel: {
      fontSize: scale(17),
      fontFamily: 'SF-Pro-Text-Bold',
      color: COLOR.Grey,
    },
    textAccept: {
      fontSize: scale(17),
      fontFamily: 'SF-Pro-Text-Bold',
      color: COLOR.White,
    },
    messageText: {
      fontSize: scale(17),
      color: COLOR.Black,
      fontFamily: 'SF-Pro-Text-Regular',
    },
  });

export default styles;
