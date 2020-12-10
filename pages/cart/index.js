import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { ShoppingCartOutlined } from '@material-ui/icons';

const Cart = () => {
  const {
    shoppingCart: { qty, items, total },
    addProduct,
    removeProduct,
    getProductQty,
  } = useContext(CartContext);

  return (
    <div className="cart">
      Cart {qty} <ShoppingCartOutlined />
      {items.map((item, i) => (
        <div key={i}>{item.product.name}</div>
      ))}
      Total: {total}
    </div>
  );
};

export default Cart;
