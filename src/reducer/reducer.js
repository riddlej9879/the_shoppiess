import {
  FETCHING_DATA_START, // toggle isFetching
  FETCHING_DATA_SUCCESS, //  update person, toggle isFetching
  FETCHING_DATA_FAILURE, //  update error, toggle isFetching
} from "../actions/actions";

const initialState = {
  movieResults: null,
  isFetching: false,
  error: "",
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA_START:
      console.log("Start");
      return {
        ...state,
        movieResults: null,
        isFetching: true,
        error: "",
      };
    case FETCHING_DATA_SUCCESS:
      console.log("Success");
      return {
        ...state,
        movieResults: action.payload,
        isFetching: false,
      };
    case FETCHING_DATA_FAILURE:
      console.log("Failure");
      return {
        ...state,
        movieResults: null,
        isFetching: false,
        error: "Hit an error",
      };
    default:
      return state;
  }
};
