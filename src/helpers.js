export const formatCountries = (countries) =>
  countries.map((country) => ({
    name: country.country,
    value: country.countryInfo.iso2,
  }));
