export const api = "https://disease.sh/v3/covid-19";
export const apiAll = "https://disease.sh/v3/covid-19/all";
export const apiLastDays = "https://disease.sh/v3/covid-19/historical/all?lastdays=120"

export const apiCountryCode = (countryCode) =>
  `https://disease.sh/v3/covid-19/countries/${countryCode}`;

export const fetchCountries = async () => {
  try {
    const response = await fetch(`${api}/countries`);
    const countries = await response.json();
    return countries;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const fetchCountryDataByCode = async (countryCode) => {
  try {
    const url =
      countryCode === "worldwide" ? apiAll : apiCountryCode(countryCode);
    const response = await fetch(url);
    const country = await response.json();
    return country;
  } catch (err) {
    return err;
  }
};

export const fetchAllCountryData = async () => {
  try {
    const response = await fetch(apiAll);
    const countries = await response.json();
    return countries;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const fetch120Days = async () => {
  try {
    const response = await fetch(apiLastDays);
    const countries = await response.json();
    return countries;
  } catch (err) {
    console.log(err);
    return err;
  }
};