import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../hooks/ScaleSize';
import {windowWidth} from '../../constants/Values';
import {COLOR} from '../../utils';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: scale(70),
    height: scale(70),
    marginTop: verticalScale(170),
    backgroundColor: COLOR.White,
  },
});

export default styles;
