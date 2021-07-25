import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleProduct } from '../actions/actions';
import Loading from '../components/Loading';

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);

  const { loading, error, singleProduct } = useSelector((state) => state);

  console.log(loading, error, singleProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProduct(`http:///fakestoreapi.com/products/${id}`));
  }, [id, dispatch]);

  if (loading) {
    return <Loading />;
  }

  const { id: productID, title, image, description, price } = singleProduct;

  return (
    <Container>
      <Box key={productID} overflow="hidden" mt="5rem" pb="3">
        <Image
          backgroundPosition="top"
          objectFit="cover"
          src={image}
          alt={title}
        />

        <Box>
          <Flex justify="space-between">
            <Heading mx="3" fontSize="1rem" as="p">
              {title}
            </Heading>
            <Text fontWeight="medium" mx="3">
              {`$ ${price}`}
            </Text>
          </Flex>
          <Heading fontWeight="medium" fontSize="inherit" mx="3" my="3" as="p">
            {description}
          </Heading>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetails;
