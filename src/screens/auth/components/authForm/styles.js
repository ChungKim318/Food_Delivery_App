import {StyleSheet} from 'react-native';
import {scale} from '../../../../hooks/ScaleSize';
import {COLOR} from '../../../../utils';

const styles = isError => StyleSheet.create({
  container: {
    flex: 1,
  },

  forgot: {
    marginTop: scale(10),
    left: scale(50),
  },
  forgotText: {
    color: COLOR.OrangeRed,
    fontSize: scale(15),
    fontFamily: 'SF-Pro-Text-Bold',
  },
  remainText:{
    color: isError ? COLOR.Red : COLOR.Black,
    fontSize:scale(13),
    paddingLeft:scale(50)
  },

});

export default styles;
