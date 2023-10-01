import { useState } from "react";

import { LosAngelesData } from "../../data/usa/los-angeles";
import { NewOrleansData } from "../../data/usa/new-orleans";
import { NewYorkData } from "../../data/usa/new-york";
import { WeatherChart } from "../weather-chart/WeatherChart";

const LOCATION_DATA = [
  { name: "Los Angeles", weatherData: LosAngelesData },
  { name: "New Orleans", weatherData: NewOrleansData },
  { name: "New York", weatherData: NewYorkData },
];

export const UsaHumidityChart = () => {
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
        <WeatherChart
          type={"hum"}
          name="Humidity"
          color="#99d884"
          data={location.weatherData}
        />
      </div>
      <button onClick={handleChangeLocationClick}>Change Location</button>
    </div>
  );
};
