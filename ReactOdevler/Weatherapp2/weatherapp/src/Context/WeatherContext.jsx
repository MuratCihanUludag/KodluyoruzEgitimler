import { useState } from "react";
import { createContext } from "react";
import Citys from "../Data/Citys.json";

const WeatherContext = createContext();
export const WeatherProvide = ({ children }) => {
  const [city, setCity] = useState(
    Citys.find((item) => item.name === "Mersin")
  );
  const [weatherCity, setWeatherCity] = useState([]);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const values = { city, setCity, Citys, weatherCity, setWeatherCity, days };

  return (
    <WeatherContext.Provider value={values}>
      {" "}
      {children}{" "}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
