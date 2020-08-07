import React, { useState, useEffect } from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import { api, fetchCountries } from "../api";
import { formatCountries } from "../helpers";

const Header = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  useEffect(() => {
    const getCountries = async () => {
      const data = await fetchCountries();
      const countries = formatCountries(data);
      setCountries(countries);
    };

    getCountries();
  }, []);

  const onCountryChange = (e) => {
    const countryCode = e.target.value;
    setCountry(countryCode);
  };

  return (
    <>
      <h1>COVID-19 Stats</h1>
      <FormControl className="header__dropdown">
        <Select variant="outlined" onChange={onCountryChange} value={country}>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          {countries.map((country) => (
            <MenuItem value={country.value}>{country.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default Header;
