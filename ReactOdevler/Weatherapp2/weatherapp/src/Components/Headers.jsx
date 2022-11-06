import React, { useContext } from "react";
import WeatherContext from "../Context/WeatherContext";

function Headers() {
  const { city, setCity, Citys } = useContext(WeatherContext);
  const handleCity = (event) => {
    Citys.filter((item) => {
      return item.name === event.target.value && setCity(item);
    });
  };

  console.log({ city });
  return (
    <div className="col-sm-12 blue float-start p-3">
      <div className="btn-group ">
        <select
          className="btn btn-secondary dropdown-toggle"
          name="city"
          id="city"
          type="button"
          value={city.name}
          onChange={handleCity}
        >
          {Citys.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Headers;
