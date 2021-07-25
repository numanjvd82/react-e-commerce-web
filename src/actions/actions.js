export const handleLoading = (dispatchType) => {
  return { type: dispatchType };
};

export const fetchProductsSuccess = (products, dispatchType) => {
  return { type: dispatchType, payload: products };
};

export const fetchProductsFailure = (error, dispatchType) => {
  return { type: dispatchType, payload: error };
};

export const fetchProducts = (url) => async (dispatch) => {
  dispatch(handleLoading('HANDLE_LOADING'));
  try {
    const res = await fetch(url);
    const data = await res.json();
    dispatch(fetchProductsSuccess(data, 'FETCH_PRODUCTS_SUCCESS'));
  } catch (error) {
    dispatch(fetchProductsFailure(error, 'FETCH_PRODUCTS_FAILURE'));
  }
};

export const fetchSingleProduct = (url) => async (dispatch) => {
  dispatch(handleLoading('HANDLE_LOADING'));
  try {
    const res = await fetch(url);
    const data = await res.json();
    dispatch(fetchProductsSuccess(data, 'FETCH_SINGLE_PRODUCT_SUCCESS'));
  } catch (error) {
    dispatch(fetchProductsFailure(error, 'FETCH_PRODUCTS_FAILURE'));
  }
};
