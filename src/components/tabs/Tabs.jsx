import { useState } from "react";

export const Tabs = ({ tabs }) => {
  const [currentTabKey, setCurrentTabKey] = useState(tabs?.[0]?.key);
  const handleCurrentTabKeyChange = (key) => {
    setCurrentTabKey(key);
  };

  const tabButtons = tabs.map((tab) => (
    <button key={tab?.key} onClick={() => handleCurrentTabKeyChange(tab?.key)}>
      {tab?.name}
    </button>
  ));

  const currentTab = tabs.find((tab) => tab?.key === currentTabKey);
  const CurrentTabComponent = currentTab.Component;

  return (
    <div>
      <div>{tabButtons}</div>
      <div className="tab">
        <CurrentTabComponent />
      </div>
    </div>
  );
};
