import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {scale} from '../../hooks/ScaleSize';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Header = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={scale(24)} />
        </TouchableOpacity>
      </View>
      <View style={styles.centerView}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.rightView}></View>
    </View>
  );
};

export default Header;
