import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    },
    grid: {
      color: "white"
    }
  }
}));

export default function ServerInfo(props) {
  const classes = useStyles();

  let serverInfo = {
    exp: props.experiencia ? props.experiencia : "--",
    masterExp: props.masterExp ? props.masterExp : "--",
    drop: props.drop ? props.drop : "--",
    version: props.version ? props.version : "--",
    resetLvl: props.resetLvl ? props.resetLvl : "--",
    resetPoints: props.resetPoints ? props.resetPoints : "--"
  };

  function getLabel(value) {
    return <Typography style={{ color: "white" }}>{value}</Typography>;
  }

  return (
    <Grid container alignContent="center" justify="center" spacing={1}>
      <Grid item md={4} lg={3}>
        <TextField
          variant="filled"
          InputProps={{
            readOnly: true
          }}
          id="standard-basic"
          label={getLabel("Experiencia")}
          value={serverInfo.exp}
          size="small"
        />
      </Grid>
      <Grid item md={4} lg={3}>
        <TextField
          variant="filled"
          InputProps={{
            readOnly: true
          }}
          id="standard-basic"
          label={getLabel("Master Exp")}
          value={serverInfo.masterExp}
          size="small"
        />
      </Grid>
      <Grid item md={4} lg={3}>
        <TextField
          variant="filled"
          InputProps={{
            readOnly: true
          }}
          id="standard-basic"
          label={getLabel("Drop")}
          value={serverInfo.drop}
          size="small"
        />
      </Grid>
      <Grid item md={4} lg={3}>
        <TextField
          variant="filled"
          InputProps={{
            readOnly: true
          }}
          id="standard-basic"
          label={getLabel("Version")}
          value={serverInfo.version}
          size="small"
        />
      </Grid>
      <Grid item md={4} lg={3}>
        <TextField
          variant="filled"
          InputProps={{
            readOnly: true
          }}
          id="standard-basic"
          label={getLabel("Reset LVL")}
          value={serverInfo.resetLvl}
          size="small"
        />
      </Grid>
      <Grid item md={4} lg={3}>
        <TextField
          variant="filled"
          InputProps={{
            readOnly: true
          }}
          id="standard-basic"
          label={getLabel("Borra Puntos")}
          value={serverInfo.resetPoints}
          size="small"
        />
      </Grid>
      <Grid item md={4} lg={3}>
        <TextField
          variant="filled"
          InputProps={{
            readOnly: true
          }}
          id="standard-basic"
          label={getLabel("Version")}
          value={serverInfo.version}
          size="small"
        />
      </Grid>
      <Grid item md={4} lg={3}>
        <TextField
          variant="filled"
          InputProps={{
            readOnly: true
          }}
          id="standard-basic"
          label={getLabel("Version")}
          value={serverInfo.version}
          size="small"
        />
      </Grid>
    </Grid>
  );
}
