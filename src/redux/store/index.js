import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import AppLoadingReducer from '../reducers/appLoadingReducer';
import ModalNotificationReducer from '../reducers/modalNotificationReducer';
import CartReducer from '../reducers/cartReducer';

const reducers = combineReducers({
  appLoadingReducer: AppLoadingReducer,
  modalNotificationReducer: ModalNotificationReducer,
  cartReducer: CartReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export default store;
