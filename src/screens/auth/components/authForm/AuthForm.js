import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import ScreenName from '../../../../constants/ScreenName';
import styles from './styles';
import {navigate} from '../../../../routers/NavigationService';
import TextInputCustom from '../textInputCustom/TextInputCustom';
import {ButtonCustom} from '../../../../components';
import {SendNotification} from '../../../../components/modalNotification';
import {useFormInput, useRemainText} from '../../../../hooks';

const AuthForm = props => {
  const account = useFormInput('');
  const password = useFormInput('');
  const rePassword = useFormInput('');

  const accountRemainText = useRemainText(256, account?.value?.length);
  const passwordRemainText = useRemainText(100, password?.value?.length);
  const rePasswordRemainText = useRemainText(100, rePassword?.value?.length);

  const {isLogin, navigation} = props;

  const onLogin = () => {
    const trueEmail =
      /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = trueEmail.test(account.value);
    if (!account.value || !password.value) {
      SendNotification({
        isShow: true,
        options: {
          type: 'error',
          title: 'Thông báo',
          message: 'Vui lòng nhập đầy đủ thông tin !',
          isAccept: true,
          onAccept: () => console.log('onAccept press'),
        },
      });
    } else {
      if (result === true) {
        if (!isLogin) {
          if (password.value == rePassword.value) {
            //////đúng khi signup
            SendNotification({
              isShow: true,
              options: {
                type: 'success',
                title: 'Thông báo',
                message: 'Đăng nhập thành công !',
                isAccept: true,
                onAccept: () =>
                  navigation.replace(
                    ScreenName.STACK_MAIN_PRODUCT_DETAIL_SCREEN,
                    {
                      screen: ScreenName.TAB_MAIN_SCREEN,
                      params: {
                        screen: ScreenName.HOME_SCREEN,
                        params: {
                          account: account.value,
                        },
                      },
                    },
                  ),
                isCancel: true,
              },
            });
          } else {
            SendNotification({
              isShow: true,
              options: {
                type: 'error',
                title: 'Thông báo',
                message: 'Confirm password chưa chính xác !',
                isAccept: true,
                onAccept: () => console.log('onAccept press'),
              },
            });
          }
        } else {
          // đúng khi login
          SendNotification({
            isShow: true,
            options: {
              type: 'success',
              title: 'Thông báo',
              message: 'Đăng nhập thành công !',
              isAccept: true,
              onAccept: () =>
                navigation.replace(
                  ScreenName.STACK_MAIN_PRODUCT_DETAIL_SCREEN,
                  {
                    screen: ScreenName.TAB_MAIN_SCREEN,
                    params: {
                      screen: ScreenName.HOME_SCREEN,
                      params: {
                        account: account.value,
                      },
                    },
                  },
                ),
              isCancel: true,
            },
          });
        }
      } else {
        SendNotification({
          isShow: true,
          options: {
            type: 'error',
            title: 'Thông báo',
            message: 'Email không đúng chuẩn !',
            isAccept: true,
            onAccept: () => console.log('onAccept press'),
          },
        });
      }
    }
  };

  const viewError = value =>
    value.errorMessage ? (
      <Text style={styles(value.errorMessage).remainText}>
        {value.errorMessage}
      </Text>
    ) : (
      <Text
        style={
          styles(value.errorMessage).remainText
        }>{`Còn ${value.remainText} ký tự`}</Text>
    );

  return (
    <View style={styles().container}>
      <TextInputCustom title={'Email address'} value={account} />
      {viewError(accountRemainText)}
      <TextInputCustom title={'Password'} value={password} isSecure={true} />
      {viewError(passwordRemainText)}
      {!isLogin && (
        <>
          <TextInputCustom
            title={'RePassword'}
            value={rePassword}
            isSecure={true}
          />
          {viewError(rePasswordRemainText)}
        </>
      )}
      <View style={styles().forgot}>
        <TouchableOpacity>
          <Text style={styles().forgotText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <ButtonCustom title={isLogin ? 'Login' : 'Sign-up'} onPress={onLogin} />
    </View>
  );
};

export default AuthForm;
