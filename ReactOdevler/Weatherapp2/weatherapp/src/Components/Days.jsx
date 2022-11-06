import React, { useContext, useEffect } from "react";
import axios from "axios";
import WeatherContext from "../Context/WeatherContext";
function Days() {
  const { city, weatherCity, setWeatherCity, days } =
    useContext(WeatherContext);
  useEffect(() => {
    async function getDays() {
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/forecast.json?key=30dd066d62e54f96929201834220511&q=${city.name}&days=7&aqi=no&alerts=no`
        );
        console.log(response.data.forecast.forecastday);
        setWeatherCity(response.data.forecast.forecastday);
      } catch (error) {
        console.error(error);
      }
    }
    getDays();
  }, [city, setWeatherCity]);

  return (
    <div style={{ display: "flex" }} className="container">
      {Object.values(weatherCity).map((item,index) => {
        return (
          <div key={index}
            className="card m-2"
            style={{ width: "18rem", justifyContent: "space-between" }}
          >
            <img src={item.day.condition.icon} alt="" />
            <div style={{ width: "18rem" }} className="card-body">
              <h5 className="text-success">
                {days[new Date(item.date).getDay()]}
              </h5>
              <h6 className="text-secondary">
                {item.day.maxtemp_c}° / {item.day.mintemp_c}°
              </h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Days;
