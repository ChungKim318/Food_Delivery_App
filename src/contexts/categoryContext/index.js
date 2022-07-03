import createContext from '../createContext';
import {getCategory} from '../actions/categoryAction';
import categoryReducer from '../reducers/categoryReducer';

export const {Context, Provider} = createContext(
  categoryReducer,
  {getCategory},
  [],
);
