import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ServerCard from "./ServerCard";

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
  const serversInformation = getServerInfoProps();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={3} />
        <Grid item xs={6}>
          {serversInformation.map(serverInfo => (
            <ServerCard serverInfo={serverInfo} />
          ))}
        </Grid>
        <Grid item xs={3} />
      </React.Fragment>
    );
  }

  function getServerInfoProps() {
    let servers = [];

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
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
