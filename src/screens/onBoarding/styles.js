import {StyleSheet} from 'react-native';
import {windowHeight} from '../../constants/Values';
import {scale, verticalScale} from '../../hooks/ScaleSize';
import {COLOR} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.OrangeRed,
  },

  paginator: {
    height: windowHeight * 0.05,
  },
});

export default styles;
