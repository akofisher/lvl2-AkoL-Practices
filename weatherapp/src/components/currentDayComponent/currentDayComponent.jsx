import React from "react";

const CurrentDayComponent = ({ cityName, countryCode }) => {
  return (
    <div className="currentWeatherWrapper">
      <p>{cityName}</p>
      <p>{countryCode}</p>
    </div>
  );
};

export default CurrentDayComponent;