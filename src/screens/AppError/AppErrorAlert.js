import React from "react";
// Redux
import { useSelector } from "react-redux";
// MUI
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const AppErrorAlert = () => {
  const classes = useStyles();

  const { error } = useSelector((state) => state.weatherInfo);
  return (
    <div className={classes.root}>
      {error && <Alert severity="warning">{error}</Alert>}
    </div>
  );
};

export default AppErrorAlert;
