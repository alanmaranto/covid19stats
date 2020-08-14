import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import { buildChartData } from "../../helpers";
import { fetch120Days } from "../../api";

const LineGraph = ({ casesType = "cases" }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getLast120Days = async () => {
      const data = await fetch120Days();
      const chartData = buildChartData(data, casesType);
      setData(chartData);
    };

    getLast120Days();
  }, [casesType]);

  return (
    <div>
      {data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: "#4f47bf",
                borderColor: "#1f15a1",
                data: data,
              },
            ],
          }}
          options={{
            legend: {
              display: false,
            },
            elements: {
              point: {
                radius: 0,
              },
            },
            maintainAspectRatio: false,
            tooltips: {
              mode: "index",
              intersect: false,
              callbacks: {
                label: function (tooltipItem, data) {
                  return numeral(tooltipItem.value).format("+0,0");
                },
              },
            },
            scales: {
              xAxes: [
                {
                  type: "time",
                  time: {
                    format: "MM/DD/YY",
                    tooltipFormat: "ll",
                  },
                },
              ],
              yAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value, index, values) {
                      return numeral(value).format("0a");
                    },
                  },
                },
              ],
            },
          }}
        />
      )}
    </div>
  );
};

export default LineGraph;
