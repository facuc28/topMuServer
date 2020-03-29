import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MiniServerCard from "./MiniServerCard";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    color: "#7f8b92"
  }
}));

export default function TopServers() {
  const classes = useStyles();

  return (
    <Grid
    container
    spacing={1}
    style={{ paddingLeft: "4vh", marginTop: "5px" }}
    >
    <Grid item xs={6} md={6} lg={6}>
      <MiniServerCard />
    </Grid>
    <Grid item xs={6} md={6} lg={6}>
      <MiniServerCard />
    </Grid>
    </Grid>
  );
}



