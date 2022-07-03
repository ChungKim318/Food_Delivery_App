import actionType from '../../actionType';

const initState = {
  isLoading: false,
};

const AppLoadingReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.IS_LOADING_TRUE:
      return {
        isLoading: true,
      };
    case actionType.IS_LOADING_FALSE:
      return {
        isLoading: false,
      };
  }
  return state;
};

export default AppLoadingReducer;
