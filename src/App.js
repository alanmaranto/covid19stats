import React from "react";
import Header from "./components/header/Header";
import InfoBox from "./components/infoBox/InfoBox";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__stats">
        <InfoBox title="Coronavirus cases" cases={1} total={10} />
        <InfoBox title="Recovered" cases={1} total={10} />
        <InfoBox title="Deaths" cases={1} total={10} />
      </div>
    </div>
  );
}

export default App;
