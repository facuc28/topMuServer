import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MainMenu from "./MainMenu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  headerColor: {
    backgroundColor: "#343a40"
  }
}));

export default function Header() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = event => {
    setAuth(!auth);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function renderUserIcon() {
    return auth ? renderUserInfoIcon() : renderButtons();
  }

  function renderButtons() {
    let buttonStyle = {
      backgroundColor: "#fd7e14",
      marginRight: "1vh"
    };

    return (
      <div>
        <Button onClick={handleChange} variant="contained" style={buttonStyle}>
          Register
        </Button>

        <Button onClick={handleChange} variant="contained" style={buttonStyle}>
          Login
        </Button>
      </div>
    );
  }

  function renderUserInfoIcon() {
    return (
      <div>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleChange}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.headerColor}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MainMenu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            TOP Mu Online server list
          </Typography>
          {renderUserIcon()}
        </Toolbar>
      </AppBar>
    </div>
  );
}
