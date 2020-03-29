import React from "react";
import "./styles.css";
import Header from "./components/Header";
import ServerList from "./components/ServerList";

export default function App() {
  return (
    <div className="App">
      <Header />
      <ServerList />
    </div>
  );
}
