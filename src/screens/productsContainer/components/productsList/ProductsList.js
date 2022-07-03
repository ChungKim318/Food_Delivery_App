import React, {memo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {navigate} from '../../../../routers/NavigationService';
import ProductCard from '../productCard/ProductCard';
import ScreenName from '../../../../constants/ScreenName';
import styles from './styles';
import Animated, {useAnimatedStyle, interpolate} from 'react-native-reanimated';
import {windowHeight} from '../../../../constants/Values';
import {WithSharing} from '../../../../hocs';

const ProductsList1 = props => {
  const {item, isMore, Key, onSharing} = props;

  //console.log('propsss', props);

  return (
    <>
      {isMore ? (
        <Animated.View style={styles(Key).containerIsMore}>
          <TouchableOpacity
            onLongPress={onSharing}
            onPress={() =>
              navigate(ScreenName.PRODUCT_DETAIL_SCREEN, {product: item})
            }>
            <ProductCard {...item} isMore={true} />
          </TouchableOpacity>
        </Animated.View>
      ) : (
        <View style={styles().container}>
          <TouchableOpacity
            onLongPress={onSharing}
            onPress={() =>
              navigate(ScreenName.PRODUCT_DETAIL_SCREEN, {product: item})
            }>
            <ProductCard {...item} isMore={false} />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const ProductsList = WithSharing(memo(ProductsList1));

export default ProductsList;
