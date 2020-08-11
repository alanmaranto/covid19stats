import React, { useState, useEffect } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  Card,
  CardContent,
} from "@material-ui/core";
import {
  apiAll,
  fetchCountries,
  apiCountryCode,
  fetchCountryDataByCode,
  fetchAllCountryData,
} from "./api";
import { formatCountries } from "./helpers";
import InfoBox from "./components/infoBox/InfoBox";
import Map from "./components/map/Map";

import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});

  useEffect(() => {
    const getWorldwideData = async () => {
      const data = await fetchAllCountryData();
      setCountryInfo(data);
    };

    getWorldwideData();
  }, []);

  useEffect(() => {
    const getCountries = async () => {
      const data = await fetchCountries();
      const countries = formatCountries(data);
      setCountries(countries);
    };

    getCountries();
  }, []);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    const data = await fetchCountryDataByCode(countryCode);
    setCountry(countryCode);

    setCountryInfo(data);

    /*     const url = countryCode === 'worldwide'
      ? apiAll
      : apiCountryCode(countryCode)
    
      await  */
  };

  console.log("ssss", countryInfo);
  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 Stats</h1>
          <FormControl className="header__dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="app__stats">
          <InfoBox
            title="Coronavirus cases"
            cases={countryInfo.todayCases}
            total={countryInfo.cases}
          />
          <InfoBox
            title="Recovered"
            cases={countryInfo.todayRecovered}
            total={countryInfo.recovered}
          />
          <InfoBox
            title="Deaths"
            cases={countryInfo.todayDeaths}
            total={countryInfo.deaths}
          />
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
