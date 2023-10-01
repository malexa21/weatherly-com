import { AsiaHumidityChart } from "../asia-humidity-chart/AsiaHumidityChart";
import { AsiaTemperatureChart } from "../asia-temperature-chart/AsiaTemperatureChart";

export const AsiaTab = () => {
  return (
    <div className="weather-tab">
      <AsiaTemperatureChart />
      <AsiaHumidityChart />
    </div>
  );
};
