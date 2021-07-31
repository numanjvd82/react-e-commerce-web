import { Badge, Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { GrClose } from 'react-icons/gr';

const CartProducts = ({ product }) => {
  const { id, title, image, description, price } = product;

  return (
    <>
      <Box borderBottom="2px solid grey" py={2} key={id}>
        <Flex
          direction={['column', 'row']}
          justify="space-between"
          align="center"
        >
          <Flex direction="column" justify="center" align="center">
            <Image
              py="2"
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
            <Badge
              my={2}
              borderRadius="7px"
              colorScheme="gray"
              fontSize="1rem"
              fontWeight="medium"
              mx="3"
            >
              {`$ ${price}`}
            </Badge>
          </Flex>
          <Box>
            <Flex direction="column" justify="center" align="center">
              <Badge
                pb={1}
                margin="0"
                borderRadius="7px"
                colorScheme="teal"
                mx="3"
                fontSize="1rem"
                as="p"
              >
                {title.substring(0, 20)}
              </Badge>
              <Text pb={1} ml={1} mr={0}>
                {description.substring(0, 35)}....
              </Text>
            </Flex>
          </Box>
          <IconButton
            my={2}
            size="md"
            mr="5"
            isRound="true"
            aria-label="Delete this product from the cart"
            icon={<GrClose />}
          />
        </Flex>
      </Box>
    </>
  );
};

export default CartProducts;
