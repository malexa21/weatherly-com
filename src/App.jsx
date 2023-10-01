import { AsiaTab } from "./components/asia-tab/AsiaTab";
import { EuropeWeatherTab } from "./components/europe-weather-tab/EuropeWeatherTab";
import { MiddleEastTab } from "./components/middle-east-tab/MiddleEastTab";
import { Tabs } from "./components/tabs/Tabs";
import { UsaTab } from "./components/usa-tab/UsaTab";

const TABS = [
  {
    key: "Europe",
    name: "Europe",
    Component: () => <EuropeWeatherTab />,
  },
  {
    key: "Asia-East",
    name: "Asia-East",
    Component: () => <AsiaTab />,
  },
  {
    key: "Asia-Middle East",
    name: "Asia-Middle East",
    Component: () => <MiddleEastTab />,
  },
  {
    key: "USA",
    name: "USA",
    Component: () => <UsaTab />,
  },
];

function App() {
  return (
    <div>
      <h1>Weatherly.com</h1>
      <Tabs tabs={TABS} />
    </div>
  );
}

export default App;
