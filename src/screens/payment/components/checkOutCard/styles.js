import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../../../hooks/ScaleSize';
import {COLOR} from '../../../../utils';
const styles = isLast =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: scale(50),
    },
    titleView: {
      flex: 1,
    },
    cardView: {
      flex: 7,
      backgroundColor: COLOR.White,
      borderRadius: scale(20),
    },
    cardView1: {
      flex: 1,
      flexDirection: 'row',
      paddingHorizontal: scale(10),
    },
    bankView: {
      flex: 1,
    },
    paypalView: {
      flex: 1,
    },
    radioView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardView2: {
      flex: 5,
      borderBottomWidth: !isLast ? verticalScale(2) : verticalScale(0),
      borderColor: COLOR.Grey,
      flexDirection: 'row',
      paddingVertical: scale(10),
    },
    iconView: {
      flex: 1,
      borderRadius: scale(20),
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleMethod: {
      flex: 3,
      justifyContent: 'center',
      paddingLeft: scale(20),
    },
    titleText: {
      fontSize: scale(17),
      color: COLOR.Black,
    },
  });

export default styles;
