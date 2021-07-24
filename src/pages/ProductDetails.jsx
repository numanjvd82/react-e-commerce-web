import { Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);

  return <Heading>Product Details</Heading>;
};

export default ProductDetails;
