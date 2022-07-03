import React, {useState} from 'react';
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import {LOGO} from '../../utils';
import LoginForm from './components/authForm/AuthForm';
import styles from './styles';
import {WithCheckConnection} from '../../hocs';

const AuthScreen = props => {
  const [isLogin, setIsLogin] = useState(true);
  const {navigation} = props;
  return (
    <ScrollView>
      <View style={styles().header}>
        <Image source={LOGO.Main} style={styles().image} />
        <View style={styles().titleContainer}>
          <View style={styles().titleView}>
            <TouchableOpacity onPress={() => setIsLogin(true)}>
              <Text style={styles().titleText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles().titleView}>
            <TouchableOpacity onPress={() => setIsLogin(false)}>
              <Text style={styles().titleText}>Sign-up</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles().lineContainer}>
          <View style={styles().titleView}>
            <View style={styles(isLogin).line} />
          </View>
          <View style={styles().titleView}>
            <View style={styles(!isLogin).line} />
          </View>
        </View>
      </View>

      <View style={styles().bodyContainer}>
        <LoginForm isLogin={isLogin} navigation={navigation} />
      </View>
    </ScrollView>
  );
};

//const AuthScreen = WithCheckConnection(AuthScreen1);

export default WithCheckConnection(AuthScreen);
