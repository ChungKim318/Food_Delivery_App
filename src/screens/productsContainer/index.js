import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {dataProduct} from '../../constants/dataProduct';
import {scale, verticalScale} from '../../hooks/ScaleSize';
import {navigate} from '../../routers/NavigationService';
import ProductsList from './components/productsList/ProductsList';
import ScreenName from '../../constants/ScreenName';
import styles from './style';
import {COLOR} from '../../utils';
import {Context} from '../../contexts/categoryContext';
import {useSearching} from '../../hooks';
import {WithCheckConnection} from '../../hocs';

const ProductsContainerScreen = props => {
  const [dataCategory, setDataCategory] = useState(dataProduct);
  const [productsList, setProductsList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoriesOri, setCategoriesOri] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const {state, getCategory} = useContext(Context);

  const searchApi = useSearching();

  useEffect(() => {
    setCategoriesOri(state?.categories);
  }, [state]);

  //console.log('đahadha', categories);

  const getName = account => {
    let nameSplit = account.split('@')[0];
    return nameSplit;
  };

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    updateProductsList();
  }, [dataCategory]);

  const account = props.route?.params?.account ?? 'you';
  const changeIsActive = name => {
    setDataCategory(
      [...dataCategory].map(item => {
        return {...item, isActive: item.name == name};
      }),
    );
  };

  const searchCategory = keyword => {
    if (!!keyword) {
      let newArray = categoriesOri.filter((value, key) => {
        let stringSum = `${value}`;
        return (
          stringSum.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) !=
          -1
        );
      });

      setCategories(newArray);
    } else {
      setCategories([]);
    }
  };

  const updateProductsList = () => {
    dataCategory.map(item => {
      if (item.isActive) {
        return setProductsList(item.products);
      }
    });
  };

  const ListEmptyComponent = () => {
    if (!!!productsList?.length) {
      return (
        <View style={styles().emptyList}>
          <Text style={styles().emptyText}>Không có sản phẩm</Text>
        </View>
      );
    }
  };
  const renderItemCategory = ({item, index}) => {
    return (
      <View style={styles().itemCategoryContainer}>
        <TouchableOpacity
          onPress={() => {
            changeIsActive(item.name);
          }}>
          <Text style={styles.textCategory}>{item?.name}</Text>
        </TouchableOpacity>
        <View style={styles(item?.isActive).line} />
      </View>
    );
  };

  const renderItemSuggest = ({item, index}) => (
    <TouchableOpacity
      onPress={() => {
        setSearchValue(item);
        searchCategory(item);
      }}>
      <Text style={styles().textSuggest}>{item}</Text>
    </TouchableOpacity>
  );
  const renderEmptySuggest = () => null;

  return (
    <SafeAreaView>
      <View style={styles().header}>
        <TouchableOpacity>
          <Image
            style={styles().image}
            resizeMode="stretch"
            source={require('../../assets/images/Vector.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Feather name="shopping-cart" size={scale(22)} color={COLOR.Grey} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: verticalScale(30),
        }}>
        <Text style={styles().titleText}>
          {`Delicious\n${searchValue} for ${getName(account)}`}
        </Text>
      </View>
      <View style={styles().searchViewContainer}>
        <View style={styles().searchView}>
          <TouchableOpacity onPress={searchApi.onPress}>
            <Feather name="search" size={scale(18)} color={COLOR.Black} />
          </TouchableOpacity>
          <TextInput
            style={styles().textInput}
            placeholder="Search"
            value={searchValue}
            onChangeText={text => {
              setSearchValue(text);
              searchCategory(text);
            }}
          />
        </View>

        <FlatList
          data={categories}
          keyExtractor={(item, index) =>
            index.toString() + Date.now().toString()
          }
          renderItem={renderItemSuggest}
          ListEmptyComponent={renderEmptySuggest}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles().lineSuggest} />}
        />
      </View>
      <View style={styles().categoryView}>
        <FlatList
          data={dataCategory}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item.name + Date.now().toString()}
          renderItem={renderItemCategory}
        />
      </View>
      <View style={styles().seeMoreContainer}>
        <TouchableOpacity
          onPress={() =>
            navigate(ScreenName.MORE_PRODUCT_SCREEN, {
              products: productsList,
            })
          }>
          <Text style={styles().seeMoreText}>see more</Text>
        </TouchableOpacity>
      </View>

      <View style={styles().cardContainer}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={productsList}
          keyExtractor={(item, index) => item.name + Date.now().toString()}
          renderItem={({item}) => {
            return <ProductsList item={item} isMore={false} />;
          }}
          ListEmptyComponent={ListEmptyComponent}
        />
      </View>
    </SafeAreaView>
  );
};

export default WithCheckConnection(ProductsContainerScreen);
