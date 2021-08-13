import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import {
  getTempInCelsius,
  getTempInFahrenheit,
} from "../../store/actions/weatherAction";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const DegreeToggle = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [fahrenheitActive, setFahrenheitActive] = useState(false);
  const [celsiusActive, setCelsiusActive] = useState(false);

  const updateForecastDegreeFahrenheit = () => {
    dispatch(getTempInFahrenheit());
    setFahrenheitActive(!fahrenheitActive);
    setCelsiusActive(false);
  };

  const updateForecastDegreeCelcious = () => {
    dispatch(getTempInCelsius());
    setCelsiusActive(!celsiusActive);
    setFahrenheitActive(false);
  };

  return (
    <div className={classes.root}>
      <ButtonGroup color="primary">
        <Button
          variant={fahrenheitActive ? "contained" : "outlined"}
          onClick={updateForecastDegreeFahrenheit}
          data-testid="fahrenheit-button"
        >
          Fahrenheit
        </Button>
        <Button
          variant={celsiusActive ? "contained" : "outlined"}
          onClick={updateForecastDegreeCelcious}
          data-testid="celsius-button"
        >
          Celsius
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default DegreeToggle;
