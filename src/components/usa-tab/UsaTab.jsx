import { UsaHumidityChart } from "../usa-humidity-chart/UsaHumidityChart";
import { UsaTemperatureChart } from "../usa-temperature-chart/UsaTemperatureChart";

export const UsaTab = () => {
  return (
    <div className="weather-tab">
      <UsaTemperatureChart />
      <UsaHumidityChart />
    </div>
  );
};
