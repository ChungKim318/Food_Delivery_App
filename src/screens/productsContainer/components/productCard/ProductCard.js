import React, {PureComponent} from 'react';
import {Image, View, Text} from 'react-native';
import {formatPrice, formatName} from '../../../../helpers';

import styles from './style';

export default class ProductCard extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {name, price, image, isMore} = this.props;
    return (
      <View style={styles(isMore).container}>
        <Image style={styles().image} resizeMode="stretch" source={image} />
        <View style={styles().card} />
        <View style={styles().infoView}>
          <Text style={styles().title}>{formatName(name)}</Text>
          <Text style={styles().price}>N{formatPrice(price)}</Text>
        </View>
      </View>
    );
  }
}
