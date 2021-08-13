import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// Components
import Header from "./screens/Header";
import ForecastCards from "./components/ForecastCards";
import AppErrorAlert from "./screens/AppError/AppErrorAlert";

const App = () => {
  return (
    <Fragment>
      <AppErrorAlert />
      <Router>
        <Header />
        <Switch>
          <Redirect exact from="/weather-casting" to="/weather-forecast" />
          <Route path="/weather-forecast">
            <ForecastCards />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
