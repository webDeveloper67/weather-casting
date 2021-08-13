import {
  GET_TEMP_IN_CELSIUS,
  GET_TEMP_IN_CELSIUS_FAIL,
  GET_TEMP_IN_FAHRENHEIT,
  GET_TEMP_IN_FAHRENHEIT_FAIL,
  GET_WEATHER_INFO,
  GET_WEATHER_INFO_FAIL,
  GET_WEATHER_INFO_REQUEST,
} from "../constants";

const initialState = {};

export const weatherInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_INFO_REQUEST:
      return { loading: true };
    case GET_WEATHER_INFO:
      return { loading: false, weatherInfo: action.payload };
    case GET_TEMP_IN_FAHRENHEIT:
      return {
        ...state,
        weatherInfo: action.payload,
        degreeType: "fahrenheit",
      };
    case GET_TEMP_IN_CELSIUS:
      return { ...state, weatherInfo: action.payload, degreeType: "celsius" };
    case GET_WEATHER_INFO_FAIL:
    case GET_TEMP_IN_FAHRENHEIT_FAIL:
    case GET_TEMP_IN_CELSIUS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
