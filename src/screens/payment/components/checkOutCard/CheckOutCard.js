import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {scale} from '../../../../hooks/ScaleSize';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';
import {COLOR} from '../../../../utils';

const CheckOutCard = ({data, setData, isPayment}) => {
  const count = Object.values(data).length;

  const onPressRadio = title => {
    setData(
      [...data].map(item => {
        return {
          ...item,
          isActive: item.title == title,
        };
      }),
    );
  };

  const renderMethod = (item, isLast) => {
    return (
      <View key={item.name + Date.now().toString()} style={styles().cardView1}>
        <View style={styles().radioView}>
          <TouchableOpacity onPress={() => onPressRadio(item.title)}>
            <Fontisto
              name="radio-btn-active"
              size={scale(24)}
              color={item.isActive ? COLOR.OrangeRed : COLOR.Grey}
            />
          </TouchableOpacity>
        </View>
        <View style={styles(isLast).cardView2}>
          {isPayment && (
            <View style={[styles().iconView, {backgroundColor: item.color}]}>
              <item.iconType
                name={item.iconName}
                size={scale(20)}
                color={COLOR.White}
              />
            </View>
          )}

          <View style={styles().titleMethod}>
            <Text style={styles().titleText}>{item.title}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles().container}>
      <View style={styles().cardView}>
        {!!data &&
          data.map((item, index) => {
            let isLast = index == data.length - 1;
            return renderMethod(item, isLast);
          })}
        {isPayment && count == 2 ? <View style={{flex: 1}} /> : null}
      </View>
    </View>
  );
};

export default CheckOutCard;
