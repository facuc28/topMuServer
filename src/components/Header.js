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
import LoginForm from "./LoginForm";

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
              <Grid item>{renderMenuIcon()}</Grid>
              <Grid item>{renderUserInformation(props)}</Grid>
              <Grid item>{renderActionButtons(props)}</Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  function renderActionButtons(props) {
    let content = {
      section1: (
        <AppButton
          content={getRegisterFormProps()}
          button={getRegisterButtonProps()}
        />
      ),
      section2: (
        <AppButton
          content={getLoginFormProps(props.handleLogin)}
          button={getLoginButtonProps()}
        />
      )
    };

    if (props.isLoggedIn) {
      let user = props.user;
      content = {
        section1: (
          <AppButton button={getLogoutButtonProps(props.handleLogout)} />
        ),
        section2: <Avatar className="avatar" src={user.profilePictureUrl} />
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
    let dataToRender = "Bienvenido a TOP MU SERVERS";

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

  function getLoginFormProps(handleLogin) {
    let formProps = {
      title: "Login",
      onSubmit: handleLogin
    };
    return <LoginForm form={formProps} />;
  }

  function getLoginButtonProps() {
    return {
      title: "Login"
    };
  }

  function getRegisterButtonProps() {
    return {
      title: "Registrar"
    };
  }

  function getRegisterFormProps() {
    let formProps = {
      title: "Login"
    };
    return <LoginForm form={formProps} />;
  }

  function getLogoutButtonProps(handleLogout) {
    return {
      title: "Logout",
      onClick: handleLogout
    };
  }

  return renderHeader(props);
}
