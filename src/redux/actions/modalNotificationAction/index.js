import actionType from '../../actionType';

const isActiveModalNotificationTrue = () => {
  return {
    type: actionType.IS_ACTIVE_NOTIFICATION_TRUE,
  };
};

const isActiveModalNotificationFalse = () => {
  return {
    type: actionType.IS_ACTIVE_NOTIFICATION_FALSE,
  };
};

export {isActiveModalNotificationTrue, isActiveModalNotificationFalse};
