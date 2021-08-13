import React, { useEffect, useState, Fragment } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { getWeatherInfo } from "../store/actions/weatherAction";
// Components
import DayCard from "./DayCard";
import Spinner from "../screens/Spinner/Spinner";

const ForecastCards = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const { weatherInfo: { list } = {} } = useSelector(
    (state) => state.weatherInfo
  );

  const { error } = useSelector((state) => state.weatherInfo);

  useEffect(() => {
    if (!error) {
      dispatch(getWeatherInfo());
      setTimeout(() => {
        setIsLoading(false);
      }, 1300);
    } else {
      setIsLoading(true);
    }
  }, [dispatch, error]);

  const dailyData =
    list &&
    list.length !== 0 &&
    list.filter((weekDay) => weekDay.dt_txt.includes("18:00:00"));

  return (
    <Fragment>
      <div>{isLoading ? <Spinner /> : <DayCard dailyData={dailyData} />}</div>
      <div>{error && isLoading && <Spinner />}</div>
    </Fragment>
  );
};

export default ForecastCards;
