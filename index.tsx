import * as React from "react";
import { WeatherGeneratorForm } from "./components/WeatherGeneratorForm";
import { Banner } from "../../../Components/Banner/";
import { Paper, Box, Typography } from "@mui/material";
import useStyles from "./style";

export default () => {
  const classes = useStyles();

  return (
    <>
      <Banner
        title={"User Interface Weather Data"}
        subtitle={"Choose all input parameters"}
        description={
          "Determine of the place and the time period for the weather service request."
        }
      />
      <Box className={classes.space}></Box>
      <Paper className={classes.container}>
        <Box className={classes.content}>
          <WeatherGeneratorForm />
        </Box>
      </Paper>
    </>
  );
};
