import React, { useState, useEffect, Fragment } from "react";
import "./styles.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

export default function App() {
  const [user, setUser] = useState({});
  const [servers, setServers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const url = "https://my-json-server.typicode.com/facuc28/mock-data/db";
    const storeUser = JSON.parse(sessionStorage.getItem("user-store"));
    let serverList = JSON.parse(sessionStorage.getItem("servers-store"));

    if (!serverList) {
      fetchServerList();
    } else {
      setServers(serverList);
    }

    if (storeUser) {
      setUser(storeUser);
      setIsLoggedIn(true);
    }
  }, []);

  const fetchServerList = () => {
    fetch("https://my-json-server.typicode.com/facuc28/mock-data/db")
      .then((res) => res.json())
      .then((data) => {
        const serverList = data.serverList;
        sessionStorage.setItem("servers-store", JSON.stringify(serverList));
        setServers(serverList);
      })
      .catch(console.log);
  };

  function getHeaderProps() {
    return {
      isLoggedIn: isLoggedIn,
      handleLogin: handleLogin,
      handleLogout: handleLogout,
      user: user,
      serverList: servers
    };
  }

  const getUserInformation = () => {
    const storeUser = JSON.parse(sessionStorage.getItem("user-store"));

    if (!storeUser) {
      fetch("https://my-json-server.typicode.com/facuc28/mock-data/db")
        .then((res) => res.json())
        .then((data) => {
          sessionStorage.setItem("user-store", JSON.stringify(data.profile));

          setUser({
            name: data.profile.name,
            lastName: data.profile.lastName,
            profilePictureUrl: data.profile.profilePictureUrl
          });
          setServers(data.serverList);
          setIsLoggedIn(true);
        })
        .catch(console.log);
    } else {
      setUser(storeUser);
      setIsLoggedIn(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    getUserInformation();
  };

  const handleLogout = (e) => {
    sessionStorage.removeItem("user-store");

    setUser({});
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Header {...getHeaderProps()} />
      <MainPage serverInfo={servers} isLoggedIn={isLoggedIn} />
    </div>
  );
}
