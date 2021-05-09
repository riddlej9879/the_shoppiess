import axios from "axios";

export const FETCHING_DATA_START = "FETCHING_DATA_START";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const FETCHING_DATA_FAILURE = "FETCHING_DATA_FAILURE";

axios.defaults.baseURL = "http://www.omdbapi.com";

export const getData = (searchUrl) => (dispatch) => {
  dispatch({ type: FETCHING_DATA_START });

  axios
    .get(searchUrl)
    .then((res) => {
      dispatch({
        type: FETCHING_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCHING_DATA_FAILURE,
        payload: `${err?.response?.message} with response code ${err?.response?.code}`,
      });
    });
};
