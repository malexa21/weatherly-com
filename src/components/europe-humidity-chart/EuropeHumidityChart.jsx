import { useState } from "react";
import { BerlinData } from "../../data/europe/berlin";
import { BrasovData } from "../../data/europe/brasov";
import { LodonData } from "../../data/europe/london";
import { WeatherChart } from "../weather-chart/WeatherChart";

const LOCATION_DATA = [
  { name: "Berlin", weatherData: BerlinData },
  { name: "Brasov", weatherData: BrasovData },
  { name: "London", weatherData: LodonData },
];

export const EuropeHumidityChart = () => {
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
