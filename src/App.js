import React from "react";
import { Card, CardContent } from "@material-ui/core";
import Header from "./components/header/Header";
import InfoBox from "./components/infoBox/InfoBox";
import Map from "./components/map/Map";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <Header />
        </div>
        <div className="app__stats">
          <InfoBox title="Coronavirus cases" cases={1} total={10} />
          <InfoBox title="Recovered" cases={1} total={10} />
          <InfoBox title="Deaths" cases={1} total={10} />
        </div>
        <Map />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live cases by Country</h3>
          <h3>Worlwide new cases</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
