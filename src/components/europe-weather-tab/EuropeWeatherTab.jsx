import { EuropeHumidityChart } from "../europe-humidity-chart/EuropeHumidityChart";
import { EuropeTemperatureChart } from "../europe-temperature-chart/EuropeTemperatureChart";

export const EuropeWeatherTab = () => {
  return (
    <div className="weather-tab">
      <EuropeTemperatureChart />
      <EuropeHumidityChart />
    </div>
  );
};
