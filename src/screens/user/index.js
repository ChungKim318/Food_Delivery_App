import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import RenderButton from './components/renderButton/RenderButton';
import {scale, verticalScale} from '../../hooks/ScaleSize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {userApi} from '../../services/api';
import styles from './styles';
import {ButtonCustom} from '../../components';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import ProFileCard from './components/proFileCard';
const UserScreen = props => {
  const [userData, setUserData] = useState([]);
  const [update, setUpdate] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    getProfile();
    return () => {
      setUserData([]);
    };
  }, [update]);

  const getProfile = async () => {
    setIsFetching(true);
    try {
      let data = await userApi.getProfile();

      if (data?.data?.results) {
        setUserData(data.data.results);
        setIsFetching(false);
      } else {
        console.log('load lỗi');
        setIsFetching(false);
      }
    } catch (err) {
      console.log(err);
      setIsFetching(false);
    }
  };

  const SkeletonCardInfo = () => (
    <SkeletonPlaceholder>
      <View style={{alignItems: 'center', marginTop: verticalScale(10)}}>
        <View style={styles.profileCardContainer} />
      </View>
    </SkeletonPlaceholder>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <AntDesign name="left" size={scale(24)} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>My profile</Text>
        </View>
        <View style={styles.title1View}>
          <Text style={styles.title1Text}>Personal detail</Text>
          <TouchableOpacity>
            <Text style={styles.textChange}>change</Text>
          </TouchableOpacity>
        </View>
        {isFetching || !userData[0] ? (
          <SkeletonCardInfo />
        ) : (
          <ProFileCard data={userData[0]} />
        )}
        <View style={styles.listButtonContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <RenderButton />
          </ScrollView>
        </View>
      </ScrollView>

      <ButtonCustom
        title={'Update'}
        onPress={() => {
          setUpdate(!update);
        }}
      />
    </SafeAreaView>
  );
};

export default UserScreen;
