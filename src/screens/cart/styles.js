import {StyleSheet} from 'react-native';
import {verticalScale} from '../../hooks/ScaleSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  bodyContainer: {
    flex: 9,
  },
  commentView: {
    flex: 0.1,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
