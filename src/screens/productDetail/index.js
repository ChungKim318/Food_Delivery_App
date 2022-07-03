import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Banner from './components/banner/Banner';
import {scale} from '../../hooks/ScaleSize';
import styles from './styles';
import {formatPrice} from '../../helpers';
import {connect, useDispatch} from 'react-redux';
import {
  addProductToCart,
  clearProductsToCart,
  removeProductToCart,
} from '../../redux/actions/cartAction';
import {ButtonCustom} from '../../components';
import {WithToast} from '../../hocs';

const ProductDetailScreen = props => {
  const product = props?.route?.params;
  const {
    currentCart,
    addProduct,
    clearCart,
    changeTypeStatus,
    changeProductName,
    startToast,
  } = props;
  const [isChange, setIsChange] = useState(false);

  const AddProductToCart = useCallback(() => {
    addProduct(product, currentCart);
    [
      changeTypeStatus('success'),
      changeProductName(product.product.name),
      startToast(),
    ];
    setIsChange(!isChange);
  }, []);
  const ClearCart = useCallback(() => clearCart(), []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <AntDesign name="left" size={scale(24)} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <AntDesign name="hearto" size={scale(24)} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView style={{flex: 8}}>
        <Banner {...product} />
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{product?.product.name}</Text>
        </View>
        <View style={styles.priceView}>
          <Text style={styles.priceText}>
            ${formatPrice(product?.product.price)}
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.infoContainer}>
            <Text
              style={[
                styles.titleText,
                {fontSize: scale(17), textAlign: 'left', fontWeight: '700'},
              ]}>
              Delivery info
            </Text>
            <Text style={styles.textNormal}>
              {product?.product.deliveryInfo}
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center', marginBottom: scale(20)}}>
          <View style={styles.infoContainer}>
            <Text
              style={[
                styles.titleText,
                {fontSize: scale(17), textAlign: 'left', fontWeight: '700'},
              ]}>
              Return policy
            </Text>
            <Text style={styles.textNormal}>
              {product?.product.returnPolicy}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={{flex: 0.15}} />

      <ButtonCustom title={'Add to cart'} onPress={AddProductToCart} />
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  const {cart} = state.cartReducer;
  return {
    currentCart: cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProduct: (product, currentCart) => {
      dispatch(addProductToCart(product, currentCart));
    },
    clearCart: () => {
      dispatch(clearProductsToCart());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WithToast(ProductDetailScreen));
