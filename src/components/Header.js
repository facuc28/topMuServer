import React from "react";
import _ from "lodash";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MainMenu from "./MainMenu";
import Avatar from "@material-ui/core/Avatar";
import LoginButton from "./LoginButton";
import "../css/styles.css";

class Header extends React.Component {
  constructor() {
    super();

    if (_.get(this.state, "isLoggedIn", true)) {
      this.state = {
        isLoggedIn: true,
        user: {
          name: "Anonimous",
          lastName: "User"
        }
      };
    }
  }

  componentDidMount() {
    const url = "url";

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoggedIn: true,
          user: {
            name: data.name,
            lastName: data.lastName,
            profilePic: data.profilePictureUrl
          }
        });
      })
      .catch(console.log);
  }

  render() {
    return this.renderHeader();
  }

  renderLoginButton() {
    let dataToRender = <LoginButton />;

    if (this.state.isLoggedIn) {
      let user = this.state.user;
      dataToRender = <Avatar className="avatar" src={user.profilePic} />;
    }

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

  renderHeader() {
    return (
      <div className="header">
        <AppBar className="navBar" position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className="menuButton"
              color="inherit"
              aria-label="menu"
            >
              <MainMenu />
            </IconButton>
            {this.renderUserInformation()}
            {this.renderLoginButton()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
