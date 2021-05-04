import axios from "axios";

const FETCHING_DATA_START = "FETCHING_DATA_START";
const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
const FETCHING_DATA_FAILURE = "FETCHING_DATA_FAILURE";

export const getData = () => (dispatch) => {
  dispatch({ type: FETCHING_DATA_START });

  axios
    .get("http://www.omdbapi.com/?apikey=385f371e")
    .then((res) => console.log(res.data))
    .catch((err) => console.log("Error is: ", err));
};
