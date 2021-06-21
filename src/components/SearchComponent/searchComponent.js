import React from "react";
import './searchComponent.style.scss';

const SearchComponent = ({ searchedCity, setSearchedCity, setWeather }) => {
  const API_KEY = "cbcdbf61cd4e48b6bc4e3c65bdbcfd39";

  const searchFn = () => {
    fetch(
      `/v2.0/forecast/daily?city=${
        searchedCity ? searchedCity : "London"
      }&key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  };

  return (
    <div className="searchINP">
      <input
        type="text"
        name="city"
        value={searchedCity}
        onChange={(e) => setSearchedCity(e.target.value)}
        className='search'
      />
      <button onClick={searchFn} className='searchBTN'>Search</button>
    </div>
  );
};

export default SearchComponent;
