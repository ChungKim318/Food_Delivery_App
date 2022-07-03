import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {SendNotification} from '../../components/modalNotification';

const WithCheckConnection = WrappedComponent => props => {
  const [internet, setInterNet] = useState(true);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setInterNet(state.isConnected);
    });

    return () => {
      unsubscribe?.();
    };
  }, [internet]);
  const notificationInternet = () =>
    SendNotification({
      isShow: true,
      options: {
        message: 'Không có internet. Vui lòng thử lại sau !',
        isAccept: true,
        titleAccept: 'Ok',
      },
    });
  return (
    <>
      <WrappedComponent {...props} />
      {!internet && notificationInternet()}
    </>
  );
};

export default WithCheckConnection;
