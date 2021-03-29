import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

export default function App() {
  const [user, setUser] = useState({});
  const [servers, setServers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
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

  const fetchUserInformation = (userData) => {
    console.log("userData: " + userData.userName + " " + userData.password);

    fetch("https://my-json-server.typicode.com/facuc28/mock-data/db")
      .then((res) => res.json())
      .then((data) => {
        let userData = {
          userName: 'Taglife',
          firstName: data.profile.name,
          lastName: data.profile.lastName,
          profilePictureUrl: data.profile.profilePictureUrl
        }
        sessionStorage.setItem("user-store", JSON.stringify(userData));

        setUser(userData);
        setIsLoggedIn(true);
      })
      .catch(console.log);
  };

  const handleLogin = (userData) => {
    fetchUserInformation(userData);
  };

  const handleLogout = (e) => {
    sessionStorage.removeItem("user-store");

    setUser({});
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Header {...getHeaderProps()} />
      <MainPage serverInfo={servers} user={user} isLoggedIn={isLoggedIn} />
    </div>
  );
}
