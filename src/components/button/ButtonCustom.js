import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';

const ButtonCustom = ({title, onPress, colorButton, colorText}) => {
  return (
    <TouchableOpacity style={styles().buttonContainer} onPress={onPress}>
      <View style={styles(colorButton).button}>
        <Text style={styles(null, colorText).buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
