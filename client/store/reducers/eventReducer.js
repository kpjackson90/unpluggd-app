import * as types from "../types";

const initialState = {
  events: [],
  event: {},
  loading: false,
  error: null,
};

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_EVENTS:
      return {
        ...state,
        events: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
