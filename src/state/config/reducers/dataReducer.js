import { dataActions } from "../actions";
import initialState from "../initialState";

function dataReducer(state = initialState.dataState, actions) {
  switch (actions.type) {
    case dataActions.FETCH_DATA_REQUEST:
      return {
        ...state,
        fetchDataError: {},
        fetchingData: true,
      };
    case dataActions.FETCH_DATA_SUCCESS:
      return {
        ...state,
        fetchedData: actions.data,
        approveError: {},
        fetchingData: false,
      };
    case dataActions.FETCH_DATA_ERROR:
      return {
        ...state,
        fetchDataError: actions.error,
        fetchingData: false,
      };

    case dataActions.ADD_ITEM_TO_COUNTER:
      return {
        ...state,
        cartItems: [...state.cartItems, actions.cartItem],
      };

    default:
      return state;
  }
}

export default dataReducer;
