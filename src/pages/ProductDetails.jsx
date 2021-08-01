import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { handleAddProductToCart, fetchSingleProduct } from '../actions/actions';
import Loading from '../components/Loading';

const ProductDetails = () => {
  const { id } = useParams();

  const { loading, singleProduct } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProduct(`https:///fakestoreapi.com/products/${id}`));
  }, [dispatch, id]);

  if (loading) {
    return <Loading />;
  }

  const addProductToCart = (productID) => {
    dispatch(handleAddProductToCart(productID));
  };

  const { id: productID, title, image, description, price } = singleProduct;

  return (
    <Container>
      <Box key={productID} mt="5rem" pb="3">
        <Image
          backgroundPosition="top"
          objectFit="cover"
          src={image}
          alt={title}
          mb="1rem"
        />

        <Box>
          <Flex align="center" justify="space-between">
            <Badge
              whiteSpace="normal"
              borderRadius="10px"
              colorScheme="teal"
              mx="3"
              fontSize="1rem"
              as="p"
            >
              {title}
            </Badge>
            <Badge
              borderRadius="10px"
              colorScheme="gray"
              fontSize="1.5rem"
              fontWeight="medium"
              mx="3"
            >
              {`$ ${price}`}
            </Badge>
          </Flex>
          <Heading fontWeight="medium" fontSize="inherit" mx="3" my="3" as="p">
            {description}
          </Heading>
          <Center>
            <Button
              onClick={() => addProductToCart(productID)}
              _hover={{
                bgColor: 'gray.400',
                transform: 'translateY(-5px)',
              }}
              my="4"
              size="md"
              bgColor="gray.500"
            >
              Add to Cart
            </Button>
          </Center>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetails;
