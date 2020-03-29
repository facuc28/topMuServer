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

class Header extends React.Component {
  constructor() {
    super();

    if (_.get(this.state, "isLoggedIn", true)) {
      this.state = this.getInitialState();
    }
  }

  getInitialState() {
    return {
      isLoggedIn: false,
      user: {
        name: "Anonimous",
        lastName: "User"
      }
    };
  }

  componentDidMount() {
    const url = "https://my-json-server.typicode.com/facuc28/mock-data/db";

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoggedIn: true,
          user: {
            name: data.profile.name,
            lastName: data.profile.lastName,
            profilePic: data.profile.profilePictureUrl
          }
        });
      })
      .catch(console.log);
  }

  render() {
    return this.renderHeader();
  }

  renderHeader() {
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
              <Grid item>{this.renderMenuIcon()}</Grid>
              <Grid item>{this.renderUserInformation()}</Grid>
              <Grid item>{this.renderActionButtons()}</Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  renderActionButtons() {
    let content = {
      section1: <AppButton {...this.getRegisterButtonProps()} />,
      section2: <AppButton {...this.getLoginButtonProps()} />
    };

    if (this.state.isLoggedIn) {
      let user = this.state.user;
      content = {
        section1: <AppButton {...this.getLogoutButtonProps()} />,
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

  renderUserInformation() {
    let dataToRender = "Welcome Anonimous";

    if (this.state.isLoggedIn) {
      let user = this.state.user;
      dataToRender = "Welcome " + user.name.concat(" ", user.lastName);
    }

    return (
      <Typography variant="h6" className="title">
        {dataToRender}
      </Typography>
    );
  }

  renderMenuIcon() {
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

  getLoginButtonProps() {
    return {
      title: "Login",
      onSubmit: this.handleLogin
    };
  }

  getRegisterButtonProps() {
    return {
      title: "Registrar"
    };
  }

  getLogoutButtonProps() {
    return {
      title: "Logout",
      onClick: this.handleLogout
    };
  }

  handleLogout = () => {
    this.setState(this.getInitialState());
  };

  handleLogin = e => {
    e.preventDefault();

    this.setState({
      isLoggedIn: true,
      user: {
        name: e.target[0].value,
        lastName: "Crusta"
      }
    });
  };
}

export default Header;
