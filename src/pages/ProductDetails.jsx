import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const ProductDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { isLoading, error, data } = useQuery(["products", id], () =>
    fetch(`http:///fakestoreapi.com/products/${id}`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  const handleCart = () => {
    // dispatch an action to add the item to the cart
  };

  const { id: productID, title, image, description, price } = data;

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
              onClick={() => handleCart()}
              _hover={{
                bgColor: "gray.400",
                transform: "translateY(-5px)",
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
