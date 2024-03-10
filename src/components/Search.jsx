import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import City from "./City";
import { fetchData } from "../redux/actions";

const Search = () => {
  const [city, setCity] = useState("");
  // Correct the useSelector to access root state
  const { weatherData, isLoading, isError } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchData(city));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-bar">Search weather of a city here:</label>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          id="search-bar"
        />
        <Button type="submit" colorScheme="blue">
          Search
        </Button>
      </form>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error occurred while fetching data. Please try again.</p>
      ) : (
        <City weatherData={weatherData} />
      )}
    </div>
  );
};

export default Search;
