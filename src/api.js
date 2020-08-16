export const api = "https://disease.sh/v3/covid-19";

export const apiCountryCode = (countryCode) =>
  `${api}/countries/${countryCode}`;

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
      countryCode === "worldwide" ? `${api}/all` : apiCountryCode(countryCode);
    const response = await fetch(url);
    const country = await response.json();
    return country;
  } catch (err) {
    return err;
  }
};

export const fetchAllCountryData = async () => {
  try {
    const response = await fetch(`${api}/all`);
    const countries = await response.json();
    return countries;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const fetchLastDays = async (lastDays) => {
  try {
    const response = await fetch(`${api}/historical/all?lastdays=${lastDays}`);
    const countries = await response.json();
    return countries;
  } catch (err) {
    console.log(err);
    return err;
  }
};