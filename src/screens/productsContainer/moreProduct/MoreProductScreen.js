import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
  RefreshControl,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {scale} from '../../../hooks/ScaleSize';
import ProductsList from '../components/productsList/ProductsList';
import styles from './styles';
import SkeletonProduct from './components/skeletonProduct/SkeletonProduct';
import {getData} from '../../../utils/fakeApi';
import LottieView from 'lottie-react-native';
import {COLOR} from '../../../utils';
import {windowHeight} from '../../../constants/Values';
import Entypo from 'react-native-vector-icons/Entypo';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const MoreProductScreen = props => {
  const [products, setProducts] = useState({
    data: [],
    skip: 0,
  });
  const [productsOri, setProductsOri] = useState({
    data: [],
    skip: 0,
  });
  const [textSearch, setTextSearch] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [isEndList, setIsEndList] = useState(false);
  const PAGE = 4;
  const size = products?.data?.length;

  const TouchableOpacityAnimated =
    Animated.createAnimatedComponent(TouchableOpacity);
  // dùng Animated.FlatList không set ref được
  const FlatListAnimated = useCallback(
    Animated.createAnimatedComponent(FlatList),
    [],
  );
  const translateY = useSharedValue(0);
  const buttonAnimation = useSharedValue(0);

  const scrollViewHandler = useAnimatedScrollHandler(event => {
    translateY.value = event.contentOffset.y;
    buttonAnimation.value = event.contentOffset.y;
  });

  const flatListRef = useRef(null);

  const buttonAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY:
            buttonAnimation.value > 420 ? withTiming(-140) : withTiming(0),
        },
        {
          translateX:
            buttonAnimation.value > 420 ? withTiming(-140) : withTiming(0),
        },
      ],
    };
  });

  useEffect(() => {
    FetchData(0, PAGE, true);
    return () => {
      setProducts({data: [], skip: 0});
      setProductsOri({data: [], skip: 0});
    };
  }, []);

  const searchProduct = keyword => {
    if (!!keyword) {
      let newArray = productsOri.data.filter((value, key) => {
        let stringSum = `${value.name}`;
        return (
          stringSum.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) !=
          -1
        );
      });

      setProducts({data: newArray, skip: productsOri.skip});
    } else {
      setProducts({data: productsOri.data, skip: productsOri.skip});
    }
  };

  const FetchData = async (skip, take, isRefresh) => {
    setIsFetching(true);
    try {
      const data = await getData(skip, take);
      if (!!data.length) {
        if (isRefresh) {
          setProductsOri({data: data, skip: PAGE});
          setProducts({data: data, skip: PAGE});
          // để setProducts sau setProductsOri để tránh render khi state thay đổi--giảm 1 lần render
          setIsEndList(false);
          setIsFetching(false);
        } else {
          setProductsOri({
            data: [...productsOri.data, ...data],
            skip: products.skip + PAGE,
          });
          setProducts({
            // dùng ...productsOri.data tránh lỗi khi searchText có ký tự và LoadMore thêm
            data: [...productsOri.data, ...data],
            skip: products.skip + PAGE,
          });
          setIsFetching(false);
        }
      } else {
        setIsEndList(true);
        setIsFetching(false);
      }
    } catch (err) {
      console(err);
      setIsFetching(false);
    }
  };

  const renderEmptyData = () => {
    if (isFetching) {
      return <SkeletonProduct />;
    }
    if (!isFetching) {
      return (
        <View style={styles.listEmpty}>
          <Text style={styles.textEmpty}> Không có sản phẩm nào được tải </Text>
        </View>
      );
    }
    return null;
  };

  const renderFooter = () => {
    if (isFetching && !!size && !isEndList) {
      return (
        <View style={styles.lottie}>
          <LottieView
            source={require('../../../assets/icons/Splash.json')}
            autoPlay
            loop
          />
        </View>
      );
    }
    if (isEndList && !!size) {
      return (
        <View style={styles.lottie}>
          <Text style={styles.textEmpty}> Hết </Text>
        </View>
      );
    }
    return null;
  };

  const onLoadMore = () => {
    if (!isFetching && !isEndList && !!size) {
      FetchData(products.skip, PAGE);
    }
  };

  const onPullToRefresh = () => {
    setIsEndList(false);
    if (!isFetching) {
      FetchData(0, PAGE, true);
    }
  };
  const extraData = () => products.data;
  const keyExtractor = item => item.name + Date.now().toString();

  const renderItem = ({item, index}) => {
    return <ProductsList item={item} Key={index} isMore={true} />;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <AntDesign name="left" size={scale(24)} color="black" />
        </TouchableOpacity>
        <TextInput
          placeholder="What do you find..."
          value={textSearch}
          onChangeText={text => {
            [setTextSearch(text), searchProduct(text)];
          }}
          style={{marginLeft: scale(20)}}
          fontSize={scale(18)}
        />
      </View>
      <View style={styles.listView}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>
            {!!textSearch
              ? `Found ${!!size ? size : 0} ${size > 1 ? `results` : 'result'}`
              : `Have ${!!size ? size : 0} ${
                  size > 1 ? `products` : 'product'
                } `}
          </Text>
        </View>
        <View style={styles.listView1}>
          <FlatListAnimated
            ref={flatListRef}
            numColumns={2}
            extraData={extraData}
            showsVerticalScrollIndicator={false}
            data={products.data}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            ListFooterComponentStyle={{
              alignItems: 'center',
              marginVertical: scale(20),
            }}
            getItemLayout={(data, index) => ({
              length: windowHeight * 0.9 * 0.5,
              offset: windowHeight * 0.9 * 0.5 * index,
              index,
            })}
            refreshControl={
              <RefreshControl
                tinColor={COLOR.Yellow}
                removeClippedSubviews={true}
                refreshing={false}
                onRefresh={onPullToRefresh}
              />
            }
            ListFooterComponent={renderFooter}
            ListEmptyComponent={renderEmptyData}
            onEndReached={onLoadMore}
            onEndReachedThreshold={0.1}
            scrollEventThrottle={0.1}
            onScroll={scrollViewHandler}
          />
        </View>
      </View>

      <TouchableOpacityAnimated
        style={[styles.buttonAnimatedView, buttonAnimationStyle]}
        onPress={() => flatListRef.current.scrollToOffset({y: 0})}>
        <Entypo name="arrow-up" size={scale(30)} color={COLOR.White} />
      </TouchableOpacityAnimated>
    </SafeAreaView>
  );
};

export default MoreProductScreen;
