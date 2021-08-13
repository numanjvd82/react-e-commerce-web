import { Badge, Box, Button, Center, Flex, Heading, Image, Wrap, WrapItem } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../actions/actions';
import Loading from '../components/Loading';

const Home = () => {
  const { loading, products } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts('https:///fakestoreapi.com/products'));
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Box bgColor="gray.200" py="2" overflow="hidden">
      <Wrap justify="center">
        {products.map(({ id, title, image, price, description }) => (
          <WrapItem key={id}>
            <Box
              boxShadow="2xl"
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
                _hover={{
                  transform: 'Scale(1.07)',
                  overflow: 'hidden',
                  transition: 'transform 0.5s ease',
                }}
                backgroundPosition="top"
                w="350px"
                h="250px"
                objectFit="cover"
                src={image}
                alt={title}
              />

              <Box>
                <Flex mt="2" align="center" justify="space-between">
                  <Badge borderRadius="7px" colorScheme="teal" mx="3" fontSize="1rem" as="p">
                    {title.substring(0, 20)}
                  </Badge>
                  <Badge
                    borderRadius="7px"
                    colorScheme="gray"
                    fontSize="1rem"
                    fontWeight="medium"
                    mx="3"
                  >
                    {`$ ${price}`}
                  </Badge>
                </Flex>
                <Heading fontWeight="medium" fontSize="inherit" mx="3" my="3" as="p">
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
        ))}
      </Wrap>
    </Box>
  );
};

export default Home;
