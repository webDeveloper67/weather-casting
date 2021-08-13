import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

const BarChart = () => {
  let { dt } = useParams();

  const { weatherInfo: { list } = {} } = useSelector(
    (state) => state.weatherInfo
  );

  const filterList =
    list &&
    list.length !== 0 &&
    list.filter((d) => {
      return d.dt_txt.includes(dt);
    });

  const chartData = [];

  filterList &&
    filterList.forEach((el) => {
      let temp = el.main.temp;
      let hour = el.dt_txt;
      let hourData = {
        tempInfo: temp,
        hourInfo: hour.split(" ")[1],
      };
      chartData.push(hourData);
    });

  const consumptionColor = "#8e44ad";

  return (
    <Grid container style={{ marginTop: "5rem" }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Chart data={chartData}>
            <ArgumentAxis showGrid />
            <ValueAxis max={7} />

            <BarSeries
              fill={consumptionColor}
              valueField="tempInfo"
              argumentField="hourInfo"
            />
            <Title text="Hourly Temperature" />
            <Animation />
          </Chart>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BarChart;
