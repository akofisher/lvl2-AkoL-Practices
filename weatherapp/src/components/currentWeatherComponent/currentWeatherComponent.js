import React from "react";
import WeeklyWeather from "../weeklyWeather/weeklyWeather.js";
import CurrentDayComponent from '../currentDayComponent/currentDayComponent.js';
import "./currentWeatherComponent.style.scss";


const currentWeatherComponent = (props) => {  
  const { city_name, country_code, data } = props.data;
  const { searchedCity } = props.searchedCity;

  return (
    <div className="currentWeather">
      <CurrentDayComponent cityName={city_name} countryCode={country_code}/>
      
      <div>
        {data ? (
          props.data.data.map((item) => {
            return (
              
              <WeeklyWeather
                data={item}
                key={item.moonrise_ts}
                searchedCity={searchedCity}
                />
            
            );
          })
        ) : (
          <div>loading</div>
        )}
      </div>
    </div>
  );
};

export default currentWeatherComponent;
