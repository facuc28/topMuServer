import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ServerCard from "./ServerCard";
import TopServers from "./TopServers";
import Acordion from "./Acordion";

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
  }
}));

export default function ServerList(props) {
  const classes = useStyles();
  const serversInformation = props.serverInfo
    ? props.serverInfo
    : getServerInfoProps();

  function FormRow() {
    return (
      <Grid container alignItems="center" justify="center" spacing={2}>
        <Grid item lg={12} md={12}>
          <TopServers {...serversInformation[0]} />
        </Grid>
        <Grid item lg={3} md={2} />
        <Grid item lg={6} md={8}>
          <Acordion />
        </Grid>
        <Grid item lg={3} md={2} />
        <Grid item xs={2} md={2} lg={2} />
        <Grid item xs={8} md={8} lg={8}>
          {serversInformation.map(serverInfo => (
            <ol key={serverInfo.position}>
              <ServerCard serverInfo={serverInfo} />
            </ol>
          ))}
        </Grid>
        <Grid item xs={2} md={2} lg={2} />
      </Grid>
    );
  }

  function getServerInfoProps() {
    let servers = [];

    servers.push({
      name: "THC Mu Online",
      lastRefresh: "September 14, 2016",
      votes: 10,
      drop: "80%",
      experiencia: "500x",
      resetLvl: "400",
      resetPoints: "Si",
      masterExp: "300x",
      version: "Season 6",
      position: 1,
      imgUrl:
        "http://top.tuservermu.com.ve/template/img/uploads/servers/banner_5e66ec16ca2a4.gif",
      description:
        "Server exp: 100 y drop al 80% abrio hace una semana veni a verlo",
      longDescription:
        "Method Heat  cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."
    });

    servers.push({
      name: "THC Mu Online",
      lastRefresh: "September 14, 2016",
      position: 2,
      imgUrl:
        "http://top.tuservermu.com.ve/template/img/uploads/servers/banner_5cd336de7ce8e.gif",
      description:
        "Server exp: 100 y drop al 80% abrio hace una semana veni a verlo",
      longDescription:
        "Method Heat  cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."
    });

    servers.push({
      name: "THC Mu Online",
      lastRefresh: "September 14, 2016",
      position: 3,
      imgUrl:
        "http://top.tuservermu.com.ve/template/img/uploads/servers/banner_5cd336de7ce8e.gif",
      description:
        "Server exp: 100 y drop al 80% abrio hace una semana veni a verlo",
      longDescription:
        "Method Heat  cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."
    });

    servers.push({
      name: "THC Mu Online",
      lastRefresh: "September 14, 2016",
      imgUrl:
        "http://top.tuservermu.com.ve/template/img/uploads/servers/banner_5cd336de7ce8e.gif",
      description:
        "Server exp: 100 y drop al 80% abrio hace una semana veni a verlo",
      longDescription:
        "Method Heat  cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."
    });

    servers.push({
      name: "THC Mu Online",
      lastRefresh: "September 14, 2016",
      imgUrl:
        "http://top.tuservermu.com.ve/template/img/uploads/servers/banner_5cd336de7ce8e.gif",
      description:
        "Server exp: 100 y drop al 80% abrio hace una semana veni a verlo",
      longDescription:
        "Method Heat  cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."
    });

    servers.push({
      name: "THC Mu Online",
      lastRefresh: "September 14, 2016",
      imgUrl:
        "http://top.tuservermu.com.ve/template/img/uploads/servers/banner_5cd336de7ce8e.gif",
      description:
        "Server exp: 100 y drop al 80% abrio hace una semana veni a verlo",
      longDescription:
        "Method Heat  cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."
    });
    return servers;
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
