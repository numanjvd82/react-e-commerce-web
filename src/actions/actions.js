export const handleLoading = () => {
  return { type: 'HANDLE_LOADING' };
};

export const fetchProductsSuccess = (products) => {
  return { type: 'FETCH_PRODUCTS_SUCCESS', payload: products };
};

export const fetchProductsFailure = (error) => {
  return { type: 'FETCH_PRODUCTS_FAILURE', payload: error };
};

export const fetchProducts = (url) => async (dispatch) => {
  dispatch(handleLoading());
  try {
    const data = await fetch(url);
    const products = await data.json();
    dispatch(fetchProductsSuccess(products));
  } catch (error) {
    dispatch(fetchProductsFailure(error));
  }
};
