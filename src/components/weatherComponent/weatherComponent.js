import React from "react";
import CurrentWeatherComponent from "../currentWeatherComponent/currentWeatherComponent.js";
import SearchComponent from "../SearchComponent/searchComponent.js";
import "./weatherComponent.style.scss";

const WeatherComponent = () => {
  const [weather, setWeather] = React.useState([]);
  const [searchedCity, setSearchedCity] = React.useState("");

  const API_KEY = "cbcdbf61cd4e48b6bc4e3c65bdbcfd39";

  React.useEffect(() => {
    fetch(`/v2.0/forecast/daily?city=London&key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, []);
  console.log(weather);
  return (
    <div className="wrapper">
      <SearchComponent
        searchedCity={searchedCity}
        setWeather={setWeather}
        setSearchedCity={setSearchedCity}
      />
      <CurrentWeatherComponent data={weather} searchedCity={searchedCity} />
    </div>
  );
};

export default WeatherComponent;
