import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const ProFileCard = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileCardContainer}>
        <Image
          source={{
            uri: data.picture.large,
          }}
          style={styles.imageUser}
          resizeMode="stretch"
        />
        <View style={styles.contentContainer}>
          {data?.name && (
            <Text style={styles.nameText}>
              {data?.name?.first + ' ' + data?.name?.last}
            </Text>
          )}
          <Text style={styles.contentText}>{data?.email}</Text>
          <View style={styles.line} />
          <Text style={styles.contentText}>{data?.phone}</Text>
          <View style={styles.line} />
          <Text style={styles.contentText}>
            {data?.location?.street?.number} {data?.location?.street?.name}
            {data?.location?.city}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProFileCard;
