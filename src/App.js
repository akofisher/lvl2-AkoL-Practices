import React from "react";
import "./App.scss";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
  },
  box: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    background: theme.palette.success.light,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Grid container spacing={5} className={classes.grid}>
      <Grid item xs={12}>
        <Box className={classes.box}>1</Box>
      </Grid>
      <Grid item xs={12}>
        <Box className={classes.box}>2</Box>
      </Grid>
      <Grid item xs={3}>
        <Box className={classes.box}>3</Box>
      </Grid>
      <Grid item xs={3}>
        <Box className={classes.box}>4</Box>
      </Grid>
      <Grid item xs={6}>
        <Box className={classes.box}>5</Box>
      </Grid>
      <Grid item xs={4}>
        <Box className={classes.box}>6</Box>
      </Grid>
      <Grid item xs={4}>
        <Box className={classes.box}>7</Box>
      </Grid>
      <Grid item xs={4}>
        <Box className={classes.box}>8</Box>
      </Grid>
    </Grid>
  );
}

export default App;
