import Axios from "axios";
import * as types from "../types";
import axios from "axios";

export const fetchEvents = () => async (dispatch) => {
  const res = await axios.get("url");
  dispatch({ type: types.GET_EVENTS, payload: res.data });
};
