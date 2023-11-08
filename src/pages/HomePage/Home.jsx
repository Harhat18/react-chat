import React from "react";
import "./home.style.scss";
import SideBar from "../../components/sidebar/SideBar";
import Chat from "../../components/chat/Chat";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
