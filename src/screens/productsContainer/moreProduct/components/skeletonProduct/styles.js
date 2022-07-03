import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../../../../hooks/ScaleSize';
import {windowWidth, windowHeight} from '../../../../../constants/Values';
import {COLOR} from '../../../../../utils';
const styles = key =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    cardView: {
      width: scale(187),
      height: verticalScale(250),
      borderRadius: scale(30),
      marginTop: verticalScale(35),
      marginLeft: scale(10),
      elevation: 8,
      backgroundColor: COLOR.White,
      alignItems: 'center',
    },
    cardContainer: {
      width: windowWidth / 2,
      height: windowHeight * 0.9 * 0.5,
      backgroundColor: 'transparent',
      justifyContent: key % 2 == 0 ? 'flex-start' : 'center',
    },
  });

export default styles;
