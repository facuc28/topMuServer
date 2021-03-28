import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import HelpIcon from "@material-ui/icons/Help";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1)
    }
  },
  button: {
    marginTop: "2vh",
    marginLeft: "25%",
    marginBottom: "5%",
    backgroundColor: "#FFBF27",
    border: "1px solid #FFBF27",
    borderRadius: "2px",
    fontSize: 10,
    fontWeight: "bold",
    width: "100px"
  },
  paper: {
    backgroundColor: "#f5f6fa",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 4, 2),
    width: 200
  },
  divider: {
    marginTop: "3%",
    marginBottom: "5%"
  },
  inline: {
    float: "left",
    marginRight: "3px",
    marginLeft: "10%",
    marginTop: "1%",
    color: "#44bd32",
    width: 15,
    height: 15
  }
}));

function handleErrorLogin() {}

export default function LoginForm(props) {
  const classes = useStyles();
  let form = props.form
    ? props.form
    : {
        title: "Ingresar",
        onSubmit: handleErrorLogin
      };

  return (
    <Paper className={classes.paper} elevation={3}>
      <Grid
        className={classes.modal}
        container
        spacing={2}
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12} md={12} lg={12}>
          <Typography align="center" variant="h6">
            {form.title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <form
            onSubmit={form.onSubmit}
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField id="user" label="Usuario" />
              <TextField id="pass" label="Contraseña" type="password" />
              <Button
                className={classes.button}
                type="submit"
                variant="contained"
              >
                Login
              </Button>
            </div>
          </form>
          <Divider className={classes.divider} />
        </Grid>
        <Grid xs={12} md={12} lg={12}>
          <HelpIcon className={classes.inline} />
          <Typography variant="subtitle2">Recuperar contraseña</Typography>
        </Grid>
        <Grid xs={12} md={12} lg={12}>
          <AccountCircleIcon className={classes.inline} />
          <Typography variant="subtitle2">Crear cuenta</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
