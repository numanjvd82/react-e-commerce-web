import { createStandaloneToast } from "@chakra-ui/react";

const initialState = {
  loading: false,
  products: [],
  error: null,
  singleProduct: {},
  cartCounter: 0,
  cartProducts: [],
};

const toast = createStandaloneToast();

export const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT_NUMBER") {
    return {
      ...state,
      number: state.number + 1,
    };
  }

  if (action.type === "ADD_PRODUCT_TO_CART") {
    const tempCart = state.products.filter((product) => {
      return product.id === action.id;
    });
    return {
      ...state,
      cartProducts: tempCart,
      cartCounter: state.cartCounter + 1,
    };
  }

  return state;
};
