import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MiniServerCard from "./MiniServerCard";

const useStyles = makeStyles(theme => ({
  root: {
    color: "#7f8b92"
  }
}));

export default function TopServers() {
  const classes = useStyles();

  return (
    <Grid container spacing={1} style={{ marginTop: "5px" }}>
      <Grid item lg={2} md={2} sm={2} />

      <Grid item lg={4} md={4} sm={4}>
        <MiniServerCard />
      </Grid>
      <Grid item lg={4} md={4} sm={4}>
        <MiniServerCard />
      </Grid>

      <Grid item lg={2} md={2} sm={2} />
    </Grid>
  );
}
