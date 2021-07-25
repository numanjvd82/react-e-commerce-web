import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../actions/actions';
import Loading from '../components/Loading';

const Home = () => {
  const { loading, error, products } = useSelector((state) => state);

  console.log(loading, error, products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts('http:///fakestoreapi.com/products'));
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Box my="2" overflow="hidden">
      <Wrap justify="center">
        {products.map(({ id, title, image, price, description }) => {
          return (
            <WrapItem key={id}>
              <Box
                mx="3rem"
                bgColor="gray.700"
                color="white"
                maxW="400px"
                w="350px"
                minW="150px"
                border="2px solid"
                borderColor="blue.600"
                borderRadius="lg"
                overflow="hidden"
                mt="5rem"
                pb="3"
              >
                <Image
                  backgroundPosition="top"
                  w="350px"
                  h="250px"
                  objectFit="cover"
                  src={image}
                  alt={title}
                />

                <Box>
                  <Flex justify="space-between">
                    <Heading mx="3" fontSize="1rem" as="p">
                      {title.substring(0, 20)}
                    </Heading>
                    <Text fontWeight="medium" mx="3">
                      {`$ ${price}`}
                    </Text>
                  </Flex>
                  <Heading
                    fontWeight="medium"
                    fontSize="inherit"
                    mx="3"
                    my="3"
                    as="p"
                  >
                    {`${description.substring(0, 80)}...`}
                  </Heading>
                  <Link to={`/product/${id}`}>
                    <Center>
                      <Button
                        _hover={{
                          bgColor: 'gray.400',
                          transform: 'translateY(-5px)',
                        }}
                        my="4"
                        size="sm"
                        bgColor="gray.500"
                      >
                        More Details
                      </Button>
                    </Center>
                  </Link>
                </Box>
              </Box>
            </WrapItem>
          );
        })}
      </Wrap>
    </Box>
  );
};

export default Home;
