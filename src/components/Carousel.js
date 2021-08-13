import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
// MUI
import { Container, Grid, Box, Button } from "@material-ui/core";

const Carousel = (props) => {
  const { children, show } = props;


  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <Fragment>
      <Container>
        <Grid container>
          <Box flexGrow={1} mb={3}>
            {currentIndex > 0 && (
              <Button variant="contained" color="primary" onClick={prev}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </Button>
            )}
          </Box>
          <Box mb={3}>
            {currentIndex < length - show && (
              <Button variant="contained" color="primary" onClick={next}>
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            )}
          </Box>
        </Grid>
      </Container>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <div className="carousel-content-wrapper">
            <div
              className={`carousel-content show-${show}`}
              style={{
                transform: `translateX(-${currentIndex * (100 / show)}%)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Carousel;
