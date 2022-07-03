import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {scale} from '../../../../hooks/ScaleSize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {navigate} from '../../../../routers/NavigationService';
import ScreenName from '../../../../constants/ScreenName';
import styles from './styles';
import {COLOR} from '../../../../utils';

const RenderButton = props => {
  const listItems = [
    {
      title: 'Orders',
      onPress: () => {
        console.log('Orders');
      },
    },
    {
      title: 'Payment',
      onPress: () => {
        navigate(ScreenName.PAYMENT_SCREEN);
      },
    },
    {
      title: 'Pending reviews',
      onPress: () => {
        console.log('Pending reviews');
      },
    },
    {
      title: 'Faq',
      onPress: () => {
        console.log('Faq');
      },
    },
    {
      title: 'Help',
      onPress: () => {
        console.log('Help');
      },
    },
  ];
  return listItems.map((value, index) => (
    <TouchableOpacity key={index} onPress={value.onPress}>
      <View style={styles.container}>
        <Text style={styles.titleText}>{value.title}</Text>
        <AntDesign name="right" size={scale(24)} color={COLOR.Black} />
      </View>
    </TouchableOpacity>
  ));
};

export default RenderButton;
