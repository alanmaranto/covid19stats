export const formatCountries = (countries) =>
  countries.map((country) => ({
    name: country.country,
    value: country.countryInfo.iso2,
  }));

export const sortDataByMaxCases = (data) => {
  const sortedData = [...data];

  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};
