import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
  const {
    shoppingCart: { qty },
    addProduct,
    removeProduct,
    getProductQty,
  } = useContext(CartContext);

  return <div className="cart">Cart {qty}</div>;
};

export default Cart;
