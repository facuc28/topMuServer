import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ServerCard from "./ServerCard";
import TopServers from "./TopServers";
import Acordion from "./Acordion";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#171e22"
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: "2vh"
  },
  listStyle: {
    listStyle: "none"
  }
}));

export default function ServerList(props) {
  const classes = useStyles();

  function renderServerList() {
    let dataToRender = (
      <Skeleton animation="wave" variant="circle" width={40} height={40} />
    );

    if (props.serverInfo) {
      dataToRender = props.serverInfo.map(serverInfo => (
        <li className={classes.listStyle} key={serverInfo.position}>
          <ServerCard serverInfo={serverInfo} />
        </li>
      ));
    }

    return dataToRender;
  }

  function getTopServers() {
    let dataToRender = (
      <Skeleton animation="wave" variant="circle" width={40} height={40} />
    );

    if (props.serverInfo) {
      dataToRender = props.serverInfo[0];
    }

    return dataToRender;
  }

  function FormRow() {
    return (
      <Grid container alignItems="center" justify="center" spacing={2}>
        <Grid item lg={12} md={12}>
          <TopServers {...getTopServers()} />
        </Grid>
        <Grid item lg={3} md={2} />
        <Grid item lg={6} md={8}>
          <Acordion />
        </Grid>
        <Grid item md={2} lg={3} />
        <Grid item md={3} lg={3} />
        <Grid item md={6} lg={6}>
          {renderServerList()}
        </Grid>
        <Grid item md={3} lg={3} />
      </Grid>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} md={12} lg={12}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
