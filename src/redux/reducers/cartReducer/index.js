import actionType from '../../actionType';

const initState = {
  cart: [],
};

const CartReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.ADD_PRODUCT_TO_CART:
      return {
        cart: action.payload,
      };

    case actionType.REMOVE_PRODUCT_TO_CART:
      return {
        cart: action.payload,
      };

    case actionType.MINUS_PRODUCT_TO_CART: {
      return {
        cart: action.payload,
      };
    }
    case actionType.CLEAR_PRODUCTS_TO_CART: {
      return {
        cart: action.payload,
      };
    }
  }
  return state;
};

export default CartReducer;
