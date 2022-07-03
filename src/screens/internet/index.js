import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {View, Text, TouchableOpacity} from 'react-native';
import {scale} from '../../hooks/ScaleSize';
import styles from './styles';
import {COLOR} from '../../utils';

const InternetScreen = props => {
  return (
    <View style={styles.container}>
      <Feather name="wifi-off" size={scale(135)} color={COLOR.Grey} />
      <Text style={styles.titleText}>No internet Connection</Text>
      <Text style={styles.normalText}>
        Your internet connection is currently not available please check or try
        again
      </Text>
      <TouchableOpacity>
        <View style={styles.buttonView}>
          <Text style={styles.buttonText}>Try again</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InternetScreen;
