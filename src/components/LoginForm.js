import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    },
    title: {
      marginBottom: "2px"
    }
  }
}));

export default function ValidationTextFields() {
  const classes = useStyles();

  return (
    <div>
      <Typography align="center" className={classes.title} variant="h6">
        Ingresa tus datos para acceder
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField id="standard-error" label="Usuario" />
          <TextField
            id="standard-error-helper-text"
            label="Contraseña"
            type="password"
          />
          <Button className="button" variant="contained">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
