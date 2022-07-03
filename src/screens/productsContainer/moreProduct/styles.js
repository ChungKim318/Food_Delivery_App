import {StyleSheet} from 'react-native';
import {scale} from '../../../hooks/ScaleSize';
import {COLOR} from '../../../utils';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: scale(53),
    alignItems: 'center',
  },
  listView: {
    flex: 9,
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
  },
  titleText: {
    fontSize: scale(28),
    fontFamily: 'SF-Pro-Text-Bold',
    textAlign: 'center',
  },
  titleView: {
    flex: 1,
    justifyContent: 'center',
  },
  listView1: {
    flex: 8,
    marginBottom: scale(10),
  },
  listEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEmpty: {
    fontSize: scale(20),
  },
  lottie: {
    width: scale(50),
    height: scale(50),
    backgroundColor: 'transparent',
  },
  buttonAnimatedView: {
    position: 'absolute',
    height: scale(70),
    width: scale(70),
    borderRadius: scale(35),
    backgroundColor: COLOR.OrangeRed,
    bottom: -70,
    right: -70,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
