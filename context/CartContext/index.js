import React, { createContext, useReducer } from 'react';
import { cartItemsReducer, initialState } from '../../reducers/CartItems';

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [shoppingCart, dispatch] = useReducer(cartItemsReducer, initialState);

  const addProduct = (product) => {
    dispatch({
      type: 'add',
      payload: {
        id: product.id,
        product,
        qty: 1,
      },
    });
  };

  const removeProduct = (product) => {
    dispatch({
      type: 'remove',
      payload: {
        id: product.id,
        product,
      },
    });
  };

  const getProductQty = (productId) => {
    const productFromCart = shoppingCart.items.find(
      (item) => item.id === productId
    );
    return productFromCart ? productFromCart.qty : 0;
  };

  return (
    <CartContext.Provider
      value={{
        shoppingCart,
        cartDispatch: dispatch,
        addProduct,
        removeProduct,
        getProductQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
