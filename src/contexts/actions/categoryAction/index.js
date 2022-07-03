import actionTypeContext from '../../actionTypeContext';

const getCategory = dispatch => () => {
  return dispatch({type: actionTypeContext.GET_CATEGORY});
};

export {getCategory};
