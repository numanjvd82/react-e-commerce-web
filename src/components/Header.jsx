import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
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
        <IconButton
          isRound="true"
          aria-label="Click to Open Cart"
          icon={<FaShoppingCart />}
        />
      </Flex>
    </Box>
  );
};

export default Header;
