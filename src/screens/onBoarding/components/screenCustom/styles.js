import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../../../constants/Values';
import {COLOR} from '../../../../utils';

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight * 0.9,
    backgroundColor: COLOR.OrangeRed,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default styles;
