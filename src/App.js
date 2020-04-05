import React from "react";
import "./styles.css";
import Header from "./components/Header";
import ServerList from "./components/ServerList";

class App extends React.Component {
  constructor() {
    super();

    if (!this.state) {
      this.state = {
        isLoggedIn: false
      };
    }
  }

  async componentDidMount() {
    const url = "https://my-json-server.typicode.com/facuc28/mock-data/db";
    const user = JSON.parse(sessionStorage.getItem("user-store"));
    let response;

    if (!sessionStorage["servers-store"]) {
      response = await fetch(url);
      const data = await response.json();

      console.log("what" + data);

      sessionStorage.setItem("servers-store", JSON.stringify(data));

      this.setState({
        isLoggedIn: user ? user.isLoggedIn : false,
        user: user,
        serverList: data.serverList
      });
    } else {
      const serverStore = JSON.parse(sessionStorage.getItem("servers-store"));

      this.setState({
        isLoggedIn: user ? user.isLoggedIn : false,
        user: user,
        serverList: serverStore.serverList
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header {...this.getHeaderProps()} />
        <ServerList serverInfo={this.state.serverList} />
      </div>
    );
  }

  getHeaderProps() {
    return {
      isLoggedIn: this.state.isLoggedIn,
      handleLogin: this.handleLogin,
      handleLogout: this.handleLogout,
      user: this.state.user,
      serverList: this.state.serverList
    };
  }

  handleLogin = e => {
    e.preventDefault();

    fetch("https://my-json-server.typicode.com/facuc28/mock-data/db")
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoggedIn: true,
          user: {
            name: data.profile.name,
            lastName: data.profile.lastName,
            profilePic: data.profile.profilePictureUrl
          },
          serverList: data.serverList
        });
      })
      .catch(console.log);
  };

  handleLogout = e => {
    this.setState({
      isLoggedIn: false
    });
  };
}

export default App;
