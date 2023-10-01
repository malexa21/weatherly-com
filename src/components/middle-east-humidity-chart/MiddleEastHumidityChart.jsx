import { useState } from "react";
import { DubaiData } from "../../data/middle-east/dubai";
import { KuwaitData } from "../../data/middle-east/kuwait";
import { MedinaData } from "../../data/middle-east/medina";
import { WeatherChart } from "../weather-chart/WeatherChart";

const LOCATION_DATA = [
  { name: "Dubai", weatherData: DubaiData },
  { name: "Kuwait", weatherData: KuwaitData },
  { name: "Medina", weatherData: MedinaData },
];

export const MiddleEastHumidityChart = () => {
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
