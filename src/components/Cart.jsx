import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from '@chakra-ui/react';
import CartProductsContainer from './CartProductsContainer';

const Cart = ({ onClose, onOpen, isOpen }) => {
  //

  //

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
            <Text>Hello World</Text>
            <CartProductsContainer />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
