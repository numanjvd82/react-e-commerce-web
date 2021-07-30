const CartProducts = ({ text, product }) => {
  const { id, title, image, description, price } = product;
  console.table(id, title, image, description, price);
  return <h1>{text}</h1>;
};

export default CartProducts;
