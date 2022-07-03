import {StyleSheet} from 'react-native';
import {scale} from '../../../../hooks/ScaleSize';
import {COLOR} from '../../../../utils';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: scale(15),
    width: scale(15),
    borderRadius: scale(7.5),
    backgroundColor: COLOR.White,
    marginHorizontal: scale(5),
  },
});

export default styles;
