import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '../../../../constants/Values';

const styles = Key =>
  StyleSheet.create({
    containerIsMore: {
      width: windowWidth / 2,
      height: windowHeight * 0.9 * 0.5,
      backgroundColor: 'transparent',
      justifyContent: Key % 2 == 0 ? 'flex-start' : 'flex-end',
      alignItems: 'center',
    },
    container: {
      width: windowWidth / 2,
    },
  });

export default styles;
