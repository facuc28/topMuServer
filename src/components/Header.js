import React from "react";
import _ from "lodash";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MainMenu from "./MainMenu";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import AppButton from "./AppButton";
import "../css/styles.css";

export default function Header(props) {
  function renderHeader(props) {
    return (
      <div className="header">
        <AppBar className="navBar" position="static">
          <Toolbar>
            <Grid
              container
              spacing={1}
              alignItems="center"
              justify="space-between"
            >
              <Grid>{renderMenuIcon()}</Grid>
              <Grid>{renderUserInformation(props)}</Grid>
              <Grid>{renderActionButtons(props)}</Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  function renderActionButtons(props) {
    let content = {
      section1: <AppButton {...getRegisterButtonProps()} />,
      section2: <AppButton {...getLoginButtonProps(props.handleLogin)} />
    };

    if (props.isLoggedIn) {
      let user = props.user;
      content = {
        section1: <AppButton {...getLogoutButtonProps(props.handleLogout)} />,
        section2: <Avatar className="avatar" src={user.profilePic} />
      };
    }

    let dataToRender = (
      <Grid container spacing={1} alignItems="center" justify="flex-end">
        <Grid item>{content.section1}</Grid>
        <Grid item>{content.section2}</Grid>
      </Grid>
    );

    return dataToRender;
  }

  function renderUserInformation(props) {
    let dataToRender = "Bienvenido Anonimous";

    if (props.isLoggedIn) {
      console.log(props);
      let user = props.user;
      dataToRender = "Bienvenido " + user.name.concat(" ", user.lastName);
    }

    return (
      <Typography variant="h6" className="title">
        {dataToRender}
      </Typography>
    );
  }

  function renderMenuIcon() {
    return (
      <IconButton
        edge="start"
        className="menuButton"
        color="inherit"
        aria-label="menu"
      >
        <MainMenu />
      </IconButton>
    );
  }

  function getLoginButtonProps(handleLogin) {
    return {
      title: "Login",
      onSubmit: handleLogin
    };
  }

  function getRegisterButtonProps() {
    return {
      title: "Registrar"
    };
  }

  function getLogoutButtonProps(handleLogout) {
    return {
      title: "Logout",
      onClick: handleLogout
    };
  }

  return renderHeader(props);
}
