const data = {
  FETCH_DATA_REQUEST: "FETCH_DATA_REQUEST",
  FETCH_DATA_SUCCESS: "FETCH_DATA_SUCCESS",
  FETCH_DATA_ERROR: "FETCH_DATA_ERROR",

  ADD_ITEM_TO_COUNTER: "ADD_ITEM_TO_COUNTER",
  INCREMENT_COUNTER: "INCREMENT_COUNTER",

  fetchData: () => ({
    type: data.FETCH_DATA_REQUEST,
  }),

  incrementCounter: () => ({
    type: data.INCREMENT_COUNTER,
  }),

  addITemToCart: (cartItem) => ({
    type: data.ADD_ITEM_TO_COUNTER,
    cartItem,
  }),
};

export default data;
