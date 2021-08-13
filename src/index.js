import React from "react";
import ReactDOM from "react-dom";
// Redux
import { Provider } from "react-redux";
import store from "./store/store";
// Components
import App from "./App";
// MUI
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import "./App.css";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
