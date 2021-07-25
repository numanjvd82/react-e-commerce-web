import { createStandaloneToast } from '@chakra-ui/react';

const initialState = {
  loading: false,
  products: [],
  error: null,
};

const toast = createStandaloneToast();

export const reducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT_NUMBER') {
    return {
      ...state,
      number: state.number + 1,
    };
  }

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

  return state;
};
