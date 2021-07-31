import { createStandaloneToast } from '@chakra-ui/react';

const initialState = {
  loading: false,
  products: [],
  error: null,
  singleProduct: {},
  cartProducts: [],
  isCartVisible: false,
};

const toast = createStandaloneToast();

export const reducer = (state = initialState, action) => {
  if (action.type === 'HANDLE_LOADING') {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === 'FETCH_PRODUCTS_SUCCESS') {
    return {
      ...state,
      products: action.payload,
      loading: false,
    };
  }

  if (action.type === 'FETCH_PRODUCTS_FAILURE') {
    return {
      ...state,
      error: toast({
        title: 'An error occurred.',
        description: `Something Went Wrong :(`,
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top',
      }),
      loading: false,
    };
  }

  if (action.type === 'FETCH_SINGLE_PRODUCT_SUCCESS') {
    return {
      ...state,
      singleProduct: action.payload,
      loading: false,
    };
  }

  if (action.type === 'ADD_PRODUCT_TO_CART') {
    const tempCart = state.products.filter(({ id }) => {
      return id === action.id;
    });
    return {
      ...state,
      cartProducts: [...tempCart, ...state.cartProducts],
      error: toast({
        title: 'Success',
        description: `Item added to the cart successfully.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
      }),
    };
  }

  return state;
};
