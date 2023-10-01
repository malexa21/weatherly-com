import { MiddleEastHumidityChart } from "../middle-east-humidity-chart/MiddleEastHumidityChart";
import { MiddleEastTemperatureChart } from "../middle-east-temperature-chart/MiddleEastTemperatureChart";

export const MiddleEastTab = () => {
  return (
    <div className="weather-tab">
      <MiddleEastTemperatureChart />
      <MiddleEastHumidityChart />
    </div>
  );
};
