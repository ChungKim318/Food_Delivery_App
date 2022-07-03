import {StyleSheet} from 'react-native';
import {windowWidth} from '../../../../constants/Values';
import {scale} from '../../../../hooks/ScaleSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  banner: {
    width: windowWidth,
    alignItems: 'center',
    marginVertical: 10,
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: scale(200),
    width: scale(200),
    borderRadius: scale(200),
    marginHorizontal: scale(20),
  },
});

export default styles;
