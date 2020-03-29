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

function handleErrorLogin() {}

export default function LoginForm(props) {
  const classes = useStyles();
  let form = props.form
    ? props.form
    : {
        title: "Ingresa tus datos para acceder",
        onSubmit: handleErrorLogin
      };

  return (
    <div>
      <Typography align="center" className={classes.title} variant="h6">
        {form.title}
      </Typography>
      <form
        onSubmit={form.onSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField id="user" label="Usuario" />
          <TextField id="pass" label="Contraseña" type="password" />
          <Button className="button" type="submit" variant="contained">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
