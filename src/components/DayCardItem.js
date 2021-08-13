import React from "react";
import moment from "moment";
import { Link, useRouteMatch } from "react-router-dom";
// MUI
import { Button, Typography, Box, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//Redux
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  activeCardItem: {
    borderStyle: "solid",
    borderColor: "#8561c5",
    borderWidth: 1,
  },
  weatherBtn: {
    textDecoration: "none",
  },
}));

const DayCardItem = (props) => {
  const { day, isActive, setActive, cardIndex } = props;
  const classes = useStyles();
  let { url } = useRouteMatch();

  let iconCode = day.weather[0].icon;
  let iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

  let newDate = new Date();
  const weekday = day.dt * 1000;
  newDate.setTime(weekday);

  let paramUrlId = day.dt_txt;
  paramUrlId = paramUrlId.split(" ")[0];

  const { degreeType } = useSelector((state) => state.weatherInfo);

  const degreeHandler = `Temp: ${Math.trunc(day.main.temp)}º${
    degreeType === "celsius" ? "C" : "F"
  }`;

  return (
    <Box className={`${isActive && classes.activeCardItem}`}>
      <Typography color="textSecondary" component="h3" gutterBottom>
        {degreeHandler}
      </Typography>
      <Typography variant="h5" component="h2">
        {moment(newDate).format("dddd")}
      </Typography>
      <Avatar alt="weather icon" src={iconUrl} />

      <Typography>{moment(newDate).format("MMMM Do, h:mm a")}</Typography>
      <Link to={`${url}/${paramUrlId}`} className={classes.weatherBtn}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setActive(cardIndex)}
        >
          Weather Details
        </Button>
      </Link>
    </Box>
  );
};

export default DayCardItem;
