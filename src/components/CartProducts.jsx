import { Badge, Box, Flex, Image, Text } from '@chakra-ui/react';

const CartProducts = ({ text, product }) => {
  const { id, title, image, description, price } = product;

  return (
    <>
      <Box borderBottom="2px solid grey" py={2} key={id}>
        <Flex justify="space-between" align="center">
          <Image
            _hover={{
              transform: 'Scale(1.07)',
              overflow: 'hidden',
              transition: 'transform 0.5s ease',
            }}
            backgroundPosition="top"
            w="70"
            h="70"
            objectFit="cover"
            src={image}
            alt={title}
          />
          <Box>
            <Flex direction="column" justify="center" align="center">
              <Badge
                borderRadius="7px"
                colorScheme="teal"
                mx="3"
                fontSize="1rem"
                as="p"
              >
                {title.substring(0, 20)}
              </Badge>
              <Text>{description.substring(0, 35)}....</Text>
            </Flex>
          </Box>
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
      </Box>
    </>
  );
};

export default CartProducts;
