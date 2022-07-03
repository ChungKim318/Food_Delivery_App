import React from 'react';

import {SendNotification} from '../../components/modalNotification';

const WithSharing = WrappedComponent => props => {
  const onSharing = () =>
    SendNotification({
      isShow: true,
      options: {
        message: 'Sharing',
        isAccept: true,
        titleAccept: 'Ok',
      },
    });
  return <WrappedComponent onSharing={onSharing} {...props} />;
};

export default WithSharing;
