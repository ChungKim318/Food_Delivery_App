import actionType from '../../actionType';

const addProductToCart = ({product}, currentCart) => {
  let checkExist = currentCart.filter(
    productInCart => productInCart.id == product.id,
  );

  let newCart = currentCart;

  if (checkExist.length == 0) {
    let newProduct = {...product, count: 1};
    newCart.push(newProduct);
  } else {
    newCart.map(productInNewCart => {
      if (productInNewCart.id == product.id) {
        // console.log('đã thêm hàng giống nhau')
        productInNewCart.count += 1;
      }
    });
  }
  return {
    type: actionType.ADD_PRODUCT_TO_CART,
    payload: newCart,
  };
};

const removeProductToCart = ({product}, currentCart) => {
  let newCart = currentCart?.filter(
    productInCurrentCart => productInCurrentCart.id != product.id,
  );
  return {
    type: actionType.REMOVE_PRODUCT_TO_CART,
    payload: newCart,
  };
};

const minusProductToCart = ({product}, currentCart) => {
  let newCart = currentCart;
  newCart.map(productInCart => {
    if (productInCart.id == product.id) {
      if (productInCart.count > 1) {
        productInCart.count -= 1;
      }
    }
  });
  return {
    type: actionType.MINUS_PRODUCT_TO_CART,
    payload: newCart,
  };
};

const clearProductsToCart = () => {
  let newCart = [];
  return {
    type: actionType.CLEAR_PRODUCTS_TO_CART,
    payload: newCart,
  };
};

export {
  addProductToCart,
  removeProductToCart,
  minusProductToCart,
  clearProductsToCart,
};
