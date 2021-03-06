import { useSelector } from 'react-redux';
import CartProducts from './CartProducts';

const CartProductsContainer = () => {
  const { cartProducts } = useSelector((state) => state);

  return (
    <>
      {cartProducts.map((product) => (
        <CartProducts key={product.id} product={product} />
      ))}
    </>
  );
};

export default CartProductsContainer;
