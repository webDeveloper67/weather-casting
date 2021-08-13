import { Container, Grid, Box } from "@material-ui/core";
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Spinner = () => {
  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Box mt={30}>
            <CircularProgress color="secondary" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Spinner;



