import {
  weather_data_Failure,
  weather_data_Request,
  weather_data_Success,
} from "./actionType";

export const fetch_weather_Request = () => ({
  type: weather_data_Request,
});

export const fetch_weather_Failure = () => ({
  type: weather_data_Failure,
});

export const fetch_weather_Success = (weatherdata) => ({
  type: weather_data_Success,
  payload: weatherdata,
});

export const fetchData = (city) => async (dispatch) => {
  try {
    dispatch(fetch_weather_Request());
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d26c306410c8cf6674070d0df6803c4e`
    );
    const data = await response.json();
    dispatch(fetch_weather_Success(data));
    console.log(data);
  } catch (error) {
    console.error("Error fetching weather data", error);
    dispatch(fetch_weather_Failure());
  }
};
