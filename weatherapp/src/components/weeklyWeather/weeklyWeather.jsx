import React from "react";
import "./weather.styles.scss";
import moment from "moment";

const weeklyWeather = (props) => {
  const { datetime, weather, app_max_temp, app_min_temp } = props.data;
  console.log(props.data);
  
  
  let date = moment(datetime).format("dd, MMM  DD ");
  let image = `https://www.weatherbit.io/static/img/icons/${weather.icon}.png`;

  return (
    <div className="weather_container">
      <div className="description">
        <div>
          <p>{date}</p>
        </div>
        <div className="cloud">
          <img src={image} className="icon"></img>
          <div className="container">
            <p>{Math.round(app_max_temp)}/ </p>
            <p>{Math.round(app_min_temp)} °C</p>
          </div>
        </div>
        <div className="container">
          <p>{weather.description}</p>
        </div>
      </div>
    </div>
  );
};

export default weeklyWeather;
