import actionTypeContext from '../../actionTypeContext';
import {dataProduct} from '../../../constants/dataProduct';
const initState = {
  categories: [],
};

const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypeContext.GET_CATEGORY:
      return {
        categories: [...dataProduct].map(item => item.name),
      };
  }
  return state;
};

export default categoryReducer;
