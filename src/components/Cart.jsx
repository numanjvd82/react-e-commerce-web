import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';

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
            Basic Drawer
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
