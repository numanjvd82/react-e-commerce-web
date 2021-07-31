import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
} from '@chakra-ui/react';
import CartProductsContainer from './CartProductsContainer';

const Cart = ({ onClose, onOpen, isOpen }) => {
  return (
    <>
      <Drawer
        placement="right"
        size="md"
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            Your Cart
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>
            <CartProductsContainer />

            <Box>
              <Flex justify="center" align="flex-end">
                <Heading as="h2">Total: $30.15</Heading>
              </Flex>
            </Box>
          </DrawerBody>
          <Divider />
          <DrawerFooter>
            <Button variant="ghost" bgColor="gray.400">
              Proceed to Checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
