import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

const TextInputCustom = ({title, value, isSecure}) => {
  return (
    <View style={styles.inputView}>
      <Text style={styles.titleInput}>{title}</Text>
      <TextInput
        style={styles.textInput}
        value={value.value}
        onChangeText={value.onChange}
        secureTextEntry={!!isSecure}
      />
    </View>
  );
};

export default TextInputCustom;
