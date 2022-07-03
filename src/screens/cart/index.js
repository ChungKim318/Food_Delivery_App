import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Header} from '../../components';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {scale} from '../../hooks/ScaleSize';
import {COLOR} from '../../utils';
import ProductCard from './components/productCard';
import {connect} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {
  addProductToCart,
  minusProductToCart,
  removeProductToCart,
} from '../../redux/actions/cartAction';
import {SendNotification} from '../../components/modalNotification';
import {WithSharing} from '../../hocs';

const CartScreen = props => {
  const isFocused = useIsFocused();
  const [isChange, setIsChange] = useState(false);
  useEffect(() => {}, [isFocused, isChange]);
  const {currentCart, addProduct, minusProduct, removeProduct, onSharing} =
    props;

  // không dùng useCallBack để re render lại số lượng item
  const addProductToCart = product => {
    addProduct(product, currentCart);
    setIsChange(!isChange);
  };

  const minusProductToCart = product => {
    minusProduct(product, currentCart);
    setIsChange(!isChange);
  };

  const removeProductToCart = product => {
    SendNotification({
      isShow: true,
      options: {
        type: 'error',
        message: ` Bạn thực sự muốn xóa ${product.product.name} ra khỏi giỏ hàng ? `,
        isCancel: true,
        isAccept: true,
        titleAccept: 'Ok',
        onAccept: () => {
          removeProduct(product, currentCart);
          setIsChange(!isChange);
        },
      },
    });
  };
  const keyExtractor = (item, index) =>
    item.id.toString() + Date.now.toString();
  const renderItem = ({item, index}) => {
    return (
      <ProductCard
        item={item}
        index={index}
        addProductToCart={addProductToCart}
        minusProductToCart={minusProductToCart}
        removeProductToCart={removeProductToCart}
        onSharing={onSharing}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header title={'Cart'} />
      <View style={styles.bodyContainer}>
        <View style={styles.commentView}>
          <MaterialIcons name="swipe" size={scale(24)} color={COLOR.Black} />
          <Text>Swipe on an item to delete</Text>
        </View>
        <FlatList
          data={currentCart}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    </View>
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
    minusProduct: (product, currentCart) => {
      dispatch(minusProductToCart(product, currentCart));
    },
    removeProduct: (product, currentCart) => {
      dispatch(removeProductToCart(product, currentCart));
    },
  };
};

export default WithSharing(
  connect(mapStateToProps, mapDispatchToProps)(CartScreen),
);
