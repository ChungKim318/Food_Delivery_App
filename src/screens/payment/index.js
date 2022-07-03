import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ButtonCustom, Header} from '../../components';
import CheckOutCard from './components/checkOutCard/CheckOutCard';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {COLOR} from '../../utils';

const PaymentScreen = ({navigation}) => {
  const [dataPayment, setDataPayment] = useState([
    {
      title: 'Card',
      isActive: true,
      iconType: AntDesign,
      iconName: 'idcard',
      color: COLOR.OrangeRed,
    },
    {
      title: 'Bank account',
      isActive: false,
      iconType: FontAwesome,
      iconName: 'bank',
      color: COLOR.VioletMedium,
    },
  ]);
  const [dataDelivery, setDataDelivery] = useState([
    {title: 'Door delivery', isActive: true},
    {title: 'Pick up', isActive: false},
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header title={'Checkout'} />
      </View>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Payment</Text>
      </View>
      <View style={styles.paymentView}>
        <Text style={styles.title2Text}>Payment method</Text>
        <CheckOutCard
          data={dataPayment}
          setData={setDataPayment}
          isPayment={true}
        />
      </View>
      <View style={styles.deliveryView}>
        <Text style={styles.title2Text}>Delivery method</Text>
        <CheckOutCard data={dataDelivery} setData={setDataDelivery} />
      </View>
      <View style={styles.priceView}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.priceText}>23,000</Text>
      </View>

      <View style={styles.buttonView} />
      <ButtonCustom title={'Proceed to payment'} />
    </View>
  );
};

export default PaymentScreen;
