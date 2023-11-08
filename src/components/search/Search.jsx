import React from "react";
import "./search.style.scss";
const Search = () => {
  return (
    <div className="search">
      <div className="searcForm">
        <input type="text" placeholder="Kullanıcıları Bul..."></input>
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
        <div className="userChatInfo">
          <span>Fatma</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
