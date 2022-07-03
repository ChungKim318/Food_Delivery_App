import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styles from './styles';

const SkeletonProduct = () => {
  return (
    <SkeletonPlaceholder>
      <View style={styles().container}>
        <View style={styles(0).cardContainer}>
          <View style={styles().cardView} />
        </View>
        <View style={styles(1).cardContainer}>
          <View style={styles().cardView} />
        </View>
      </View>
      <View style={styles().container}>
        <View style={styles(0).cardContainer}>
          <View style={styles().cardView} />
        </View>
        <View style={styles(1).cardContainer}>
          <View style={styles().cardView} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default SkeletonProduct;
