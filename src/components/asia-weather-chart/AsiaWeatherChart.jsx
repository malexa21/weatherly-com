import { useState } from "react";
import { BangkokData } from "../../data/asia/bangkok";
import { BeijingData } from "../../data/asia/bei-jing";
import { TokyoData } from "../../data/asia/tokyo";

import { WeatherChart } from "../weather-chart/WeatherChart";

const LOCATION_DATA = [
  { name: "Bangkok", weatherData: BangkokData },
  { name: "Beijing", weatherData: BeijingData },
  { name: "Tokyo", weatherData: TokyoData },
];

export const AsiaWeatherChart = () => {
  const [location, setLocation] = useState(LOCATION_DATA[0]);

  const handleChangeLocationClick = () => {
    const currentLocationIndex = LOCATION_DATA.findIndex(
      (loc) => loc.name === location.name
    );
    const nextLocation = (currentLocationIndex + 1) % LOCATION_DATA.length;
    setLocation(LOCATION_DATA[nextLocation]);
  };

  return (
    <div>
      <h1>{location.name}</h1>
      <div className="chart">
        <WeatherChart data={location.weatherData} />
      </div>
      <button onClick={handleChangeLocationClick}>Change Location</button>
    </div>
  );
};
