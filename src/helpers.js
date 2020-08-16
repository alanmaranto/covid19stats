import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";
import "./components/map/Map.css";

const casesTypeColors = {
  cases: {
    hex: "#1176ce",
    // rgb: "rgb(204, 16, 52)",
    // half_op: "rgba(204,16,52,0.5)",
    multiplier: 800,
  },
  recovered: {
    hex: "#7dd71d",
    // rgb: "rgb(125,215,29)",
    // half_op: "rgba(125,215,29, 0.5)",
    multiplier: 1200,
  },
  deaths: {
    hex: "#fb4443",
    // rgb: "rgb(251,68,67)",
    // half_op: "rgba(251,68,67,0.5)",
    multiplier: 800,
  },
};

export const formatCountries = (countries) =>
  countries.map((country) => ({
    name: country.country,
    value: country.countryInfo.iso2,
  }));

export const sortDataByMaxCases = (data) => {
  const sortedData = [...data];

  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

// get Last Data Case with case by default
export const buildChartData = (data, casesType = "cases") => {
  const chartData = [];
  let lastDataPoint;

  for (let date in data.cases) {
    if (lastDataPoint) {
      const newDataPoint = {
        x: date,
        y: data["cases"][date] - lastDataPoint, // calculate the last data
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
};

// Draw circles on the map with interactive toottip
export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            <span className="info-title">Cases: </span>
            {numeral(country.cases).format("0.0a")}
          </div>
          <div className="info-recovered">
            <span className="info-title">Recovered: </span>
            {numeral(country.recovered).format("0.0a")}
          </div>
          <div className="info-deaths">
            <span className="info-title">Deaths: </span>
            {numeral(country.deaths).format("0.0a")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";
