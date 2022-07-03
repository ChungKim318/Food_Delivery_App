import actionType from '../../actionType';

const onIsLoadingTrue = () => {
  return {
    type: actionType.IS_LOADING_TRUE,
  };
};

const onIsLoadingFalse = () => {
  return {
    type: actionType.IS_LOADING_FALSE,
  };
};

export {onIsLoadingTrue, onIsLoadingFalse};
