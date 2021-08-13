export const handleLoading = () => ({ type: 'HANDLE_LOADING' });

export const fetchProductsSuccess = (products, dispatchType) => ({
  type: dispatchType,
  payload: products,
});

export const fetchProductsFailure = (error) => ({ type: 'FETCH_PRODUCTS_FAILURE', payload: error });

export const handleAddProductToCart = (id) => ({ type: 'ADD_PRODUCT_TO_CART', id });

export const removeCartProduct = (id) => ({ type: 'REMOVE_PRODUCT_FROM_CART', id });

export const totalCartCost = () => ({ type: 'TOTAL_CART_COST' });

export const fetchProducts = (url) => async (dispatch) => {
  dispatch(handleLoading());
  try {
    const res = await fetch(url);
    const data = await res.json();
    dispatch(fetchProductsSuccess(data, 'FETCH_PRODUCTS_SUCCESS'));
  } catch (error) {
    dispatch(fetchProductsFailure(error));
  }
};

export const fetchSingleProduct = (url) => async (dispatch) => {
  dispatch(handleLoading());
  try {
    const res = await fetch(url);
    const data = await res.json();
    dispatch(fetchProductsSuccess(data, 'FETCH_SINGLE_PRODUCT_SUCCESS'));
  } catch (error) {
    dispatch(fetchProductsFailure(error));
  }
};
