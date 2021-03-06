import {
  Badge,
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const Header = () => {
  const { cartProducts } = useSelector((state) => state);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box py="3" backgroundColor="blackAlpha.800">
      <Flex mx="3" align="center" justify="space-between">
        <Link to="/">
          <Text
            bgGradient="linear(to-l, #82A0AA,#A3CFCD)"
            bgClip="text"
            as="i"
            fontSize="1.5rem"
            fontWeight="semibold"
          >
            React-Commerce
          </Text>
        </Link>
        {isOpen && <Cart onOpen={onOpen} onClose={onClose} isOpen={isOpen} />}
        <IconButton
          onClick={onOpen}
          size="lg"
          mr="5"
          isRound="true"
          aria-label="Click to Open Cart"
          icon={<FaShoppingCart />}
        />
        <Badge
          w="20px"
          h="20px"
          borderRadius="50%"
          fontSize="1rem"
          bgColor="blue.300"
          right="7"
          top="9"
          position="absolute"
        >
          <HStack justify="center" align="center">
            <Text>{cartProducts.length}</Text>
          </HStack>
        </Badge>
      </Flex>
    </Box>
  );
};

export default Header;

// isOpen={isOpen} onOpen={onOpen} onClose={onClose}
