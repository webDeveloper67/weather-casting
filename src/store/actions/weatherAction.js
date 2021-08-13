import {
  GET_WEATHER_INFO,
  GET_WEATHER_INFO_FAIL,
  GET_TEMP_IN_FAHRENHEIT,
  GET_TEMP_IN_CELSIUS,
  GET_WEATHER_INFO_REQUEST,
  GET_TEMP_IN_FAHRENHEIT_FAIL,
  GET_TEMP_IN_CELSIUS_FAIL,
} from "../constants";
import axios from "axios";

const { REACT_APP_API_KEY } = process.env;

export const getWeatherInfo = () => async (dispatch) => {
  try {
    dispatch({ type: GET_WEATHER_INFO_REQUEST });

        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const { data } = await axios.get(
          `http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=${REACT_APP_API_KEY}&cnt=50&units=imperial`,
          config
        );

    dispatch({
      type: GET_WEATHER_INFO,
      payload: data,
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: GET_WEATHER_INFO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getTempInFahrenheit = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=${REACT_APP_API_KEY}&cnt=50&units=imperial`
    );

    dispatch({
      type: GET_TEMP_IN_FAHRENHEIT,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TEMP_IN_FAHRENHEIT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getTempInCelsius = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=${REACT_APP_API_KEY}&cnt=50&units=metric`
    );

    dispatch({
      type: GET_TEMP_IN_CELSIUS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TEMP_IN_CELSIUS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
