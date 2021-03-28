import React from "react";
import "./styles.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

class App extends React.Component {
  async componentDidMount() {
    const url = "https://my-json-server.typicode.com/facuc28/mock-data/db";
    const user = JSON.parse(sessionStorage.getItem("user-store"));
    let response;

    if (!sessionStorage["servers-store"]) {
      response = await fetch(url);
      const data = await response.json();

      sessionStorage.setItem("servers-store", JSON.stringify(data.serverList));

      this.setState({
        isLoggedIn: user ? user.isLoggedIn : false,
        user: user,
        serverList: data.serverList
      });
    } else {
      const serverList = JSON.parse(sessionStorage.getItem("servers-store"));

      this.setState({
        isLoggedIn: user ? true : false,
        user: user,
        serverList: serverList
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header {...this.getHeaderProps()} />
        <MainPage
          serverInfo={this.getServerList()}
          isLoggedIn={this.getIsLoggedIn()}
        />
      </div>
    );
  }

  getIsLoggedIn() {
    let isLoggedIn = false;

    if (this.state && this.state.isLoggedIn) {
      isLoggedIn = true;
    }

    return isLoggedIn;
  }

  getServerList() {
    let serverList;

    if (this.state) {
      serverList = this.state.serverList;
    }

    return serverList;
  }

  getHeaderProps() {
    let state = {
      isLoggedIn: false
    };

    if (this.state) {
      state = this.state;
    }

    return {
      isLoggedIn: state.isLoggedIn,
      handleLogin: this.handleLogin,
      handleLogout: this.handleLogout,
      user: state.user,
      serverList: state.serverList
    };
  }

  getUserInformation() {
    const user = JSON.parse(sessionStorage.getItem("user-store"));

    if (!user) {
      fetch("https://my-json-server.typicode.com/facuc28/mock-data/db")
        .then(res => res.json())
        .then(data => {
          sessionStorage.setItem("user-store", JSON.stringify(data.profile));

          this.setState({
            isLoggedIn: true,
            user: {
              name: data.profile.name,
              lastName: data.profile.lastName,
              profilePictureUrl: data.profile.profilePictureUrl
            },
            serverList: data.serverList
          });
        })
        .catch(console.log);
    } else {
      this.setState({
        isLoggedIn: true,
        user: {
          name: user.name,
          lastName: user.lastName,
          profilePictureUrl: user.profilePictureUrl
        }
      });
    }
  }

  handleLogin = e => {
    e.preventDefault();
    this.getUserInformation();
  };

  handleLogout = e => {
    sessionStorage.removeItem("user-store");

    this.setState({
      isLoggedIn: false
    });
  };
}

export default App;
