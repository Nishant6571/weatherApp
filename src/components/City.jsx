import React from "react";

const City = ({ weatherData }) => {
  if (
    !weatherData ||
    Object.keys(weatherData).length === 0 ||
    !weatherData.weather ||
    weatherData.weather.length === 0
  ) {
    return <p>No weather data available.</p>;
  }

  return (
    <>
      <div>City: {weatherData.name}</div>
      <p>Weather condition: {weatherData.weather[0].main}</p>
      <p>Visibility: {weatherData.visibility}</p>
      <p>Wind speed: {weatherData.wind.speed}</p>
    </>
  );
};

export default City;
