import actionType from '../../actionType';

const initState = {
  isActive: false,
};

const ModalNotificationReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.IS_ACTIVE_NOTIFICATION_TRUE:
      return {
        isActive: true,
      };
    case actionType.IS_ACTIVE_NOTIFICATION_FALSE:
      return {
        isActive: false,
      };
  }
  return state;
};

export default ModalNotificationReducer;
