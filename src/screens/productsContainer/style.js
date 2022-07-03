import {StyleSheet} from 'react-native';
import {windowWidth} from '../../constants/Values';
import {scale, verticalScale} from '../../hooks/ScaleSize';
import {COLOR} from '../../utils';

const styles = isActive =>
  StyleSheet.create({
    header: {
      width: windowWidth,
      flexDirection: 'row',
      marginTop: verticalScale(50),
      justifyContent: 'space-between',
      paddingHorizontal: scale(56),
    },
    textCategory: {
      fontSize: scale(18),
      fontFamily: 'SF-Pro-Text-Medium',
    },
    image: {
      width: scale(22),
      height: verticalScale(15),
      backgroundColor: 'transparent',
    },
    titleText: {
      fontFamily: 'SF-Pro-Text-Bold',
      fontSize: scale(35),
      color: COLOR.Black,
      marginLeft: scale(50),
    },
    searchViewContainer: {
      paddingHorizontal: scale(50),
      height: verticalScale(140),
      justifyContent: 'center',
      alignItems: 'center',
    },
    searchView: {
      width: scale(314),
      height: verticalScale(60),
      backgroundColor: COLOR.GreyLight,
      borderRadius: scale(30),
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: scale(15),
    },
    suggestSearchView: {
      height: verticalScale(80),
      width: scale(300),
      backgroundColor: COLOR.White,
      alignItems: 'center',
    },
    textInput: {
      marginLeft: scale(10),
      fontSize: scale(18),
    },
    categoryView: {
      marginLeft: scale(91),
      marginTop: verticalScale(20),
    },
    itemCategoryContainer: {
      marginRight: scale(41),
      width: scale(86),
      justifyContent: 'center',
      alignItems: 'center',
    },
    line: {
      width: scale(86),
      height: verticalScale(2),
      backgroundColor: isActive ? COLOR.OrangeRed : 'transparent',
    },
    seeMoreContainer: {
      marginTop: verticalScale(35),
      marginLeft: scale(314),
    },
    seeMoreText: {
      fontSize: scale(18),
      color: COLOR.OrangeRed,
      fontFamily: 'SF-Pro-Text-Medium',
    },
    cardContainer: {
      width: windowWidth,
      height: verticalScale(305),
    },
    emptyList: {
      width: windowWidth,
      height: verticalScale(318),
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyText: {
      fontSize: scale(20),
      fontFamily: 'SF-Pro-Text-Bold',
    },
    lineSuggest: {
      height: verticalScale(3),
      width: scale(250),
      backgroundColor: COLOR.Grey,
    },
    textSuggest: {
      fontSize: scale(15),
      marginVertical: verticalScale(5),
      fontFamily: 'SF-Pro-Text-Bold',
      color: COLOR.Black,
    },
  });

export default styles;
