import React, { Fragment, useEffect, useState } from "react";
// MUI
import { Box, Button, Container, Grid } from "@material-ui/core";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// Components
import DayCardItem from "./DayCardItem";
import DegreeToggle from "./DegreeToggle/DegreeToggle";
import Carousel from "./Carousel/Carousel";
import BarChart from "./BarChart/BarChart";
//Redux
import { getWeatherInfo } from "../store/actions/weatherAction";
import { useDispatch } from "react-redux";

const DayCard = (props) => {
  const matchesMaxWidth = useMediaQuery("(max-width:600px)");
  const matchesMinWidth = useMediaQuery("(min-width:601px)");

  let [show, setShow] = useState(3);

  const dispatch = useDispatch();

  const { dailyData } = props;

  useEffect(() => {
    if (matchesMaxWidth) {
      setShow(() => 1);
    }
    if (matchesMinWidth) {
      setShow(() => 3);
    }
  }, [show, matchesMaxWidth, matchesMinWidth]);

  const [activeIndex, setActiveIndex] = useState(null);

  let { path } = useRouteMatch();

  return (
    <Fragment>
      <Container>
        <Grid container justifyContent="center">
          <Grid item>
            <DegreeToggle />
          </Grid>
        </Grid>
      </Container>

      <Box width="100%" mx="auto" mt="3rem">
        <Carousel show={show}>
          {dailyData &&
            dailyData.map((day, index) => (
              <DayCardItem
                key={index}
                day={day}
                setActive={setActiveIndex}
                isActive={activeIndex === index}
                cardIndex={index}
              />
            ))}
        </Carousel>
      </Box>
      <Switch>
        <Route path={`${path}/:dt`}>
          <BarChart />
        </Route>
      </Switch>
    </Fragment>
  );
};
export default DayCard;
