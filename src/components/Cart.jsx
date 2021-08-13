import PropTypes from 'prop-types';
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
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { totalCartCost } from '../actions/actions';
import CartProductsContainer from './CartProductsContainer';

const Cart = ({ onClose, onOpen, isOpen }) => {
  const { cartProducts, cartTotal } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalCartCost());
  }, [dispatch, cartProducts]);

  return (
    <>
      <Drawer placement="right" size="md" isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            Your Cart
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>
            {cartProducts.length < 1 && (
              <Heading my={4} as="h2">
                No items in the Cart.
              </Heading>
            )}
            <CartProductsContainer />

            {cartProducts.length > 0 && (
              <Box my={3}>
                <Flex justify="center" align="flex-end">
                  <Heading as="h2">Total: ${cartTotal.toFixed(2)}</Heading>
                </Flex>
              </Box>
            )}
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

Cart.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default Cart;
