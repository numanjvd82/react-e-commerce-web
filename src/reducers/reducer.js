const initialState = {
  loading: false,
  products: [],
  error: null,
};

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
      error: action.payload,
      loading: false,
    };
  }

  return state;
};
