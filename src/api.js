export const api = "https://disease.sh/v3/covid-19/countries";

export const fetchCountries = async () => {
  try {
    const response = await fetch(api);
    const countries = await response.json();
    return countries;
  } catch (err) {
    console.log(err);
    return err;
  }
};
