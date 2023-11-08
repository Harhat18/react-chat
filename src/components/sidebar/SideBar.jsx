import React from "react";
import "./sidebar.style.scss";
import Navbar from "../navbar/navbar";
import Search from "../search/Search";
import Chats from "../../components/chats/Chats";
const SideBar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default SideBar;
