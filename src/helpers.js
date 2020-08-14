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
  };
  return chartData;
};
