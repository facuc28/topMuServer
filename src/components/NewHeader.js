import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MainMenu from "./MainMenu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import LoginButton from "./LoginButton";
import Grid from "@material-ui/core/Grid";
import "../css/headerStyle.css";

class NewHeader extends React.Component {
  constructor() {
    super();

    this.state = {
      auth: false,
      anchorEl: null,
      open: false,
      profile: {
        name: "User name"
      }
    };
  }

  renderUserIcon() {
    return this.state.auth ? this.renderUserInfoIcon() : this.renderButtons();
  }

  handleLogout = event => {
    this.setState({
      auth: !this.state.auth
    });
  };

  handleLogin = event => {
    this.setState({
      auth: !this.state.auth
    });
  };

  handleMenu = event => {
    this.setState({
      auth: this.state.auth,
      anchorEl: event.currentTarget,
      open: Boolean(event.currentTarget)
    });
  };

  handleClose = () => {
    this.setState({
      auth: this.state.auth,
      anchorEl: null,
      open: false
    });
  };

  renderButtons() {
    return (
      <Grid
        container
        spacing={1}
        justify="flex-end"
        className="buttonsContainer"
      >
        <Grid item>
          <Button variant="contained">Register</Button>
        </Grid>
        <Grid item>
          <LoginButton />
        </Grid>
      </Grid>
    );
  }

  renderUserInfoIcon() {
    return (
      <div>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={this.state.anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={this.state.open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }

  render() {
    return (
      <AppBar position="static" className="navBar">
        <Toolbar>
          <Grid container justify="flex-end" alignItems="center">
            <Grid item md={3} lg={2}>
              <IconButton
                edge="start"
                className="menuButton"
                color="inherit"
                aria-label="menu"
              >
                <MainMenu />
              </IconButton>
            </Grid>
            <Grid item md={6} lg={8}>
              <Typography className="title" variant="h6">
                {this.state.profile.name}
              </Typography>
            </Grid>
            <Grid item md={3} lg={2}>
              {this.renderUserIcon()}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NewHeader;
