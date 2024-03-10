import {
  weather_data_Failure,
  weather_data_Request,
  weather_data_Success,
} from "./actionType";

const inititialState = {
  weatherData: {},
  isLoading: false,
  isError: false,
};

export const weatherReducer = (state = inititialState, action) => {
  switch (action.type) {
    case weather_data_Request:
      return {
        ...state,
        isLoading: true,
      };
    case weather_data_Failure:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case weather_data_Success:
      return {
        ...state,
        isLoading: false,
        weatherData: action.payload,
      };
    default:
      return state;
  }
};
