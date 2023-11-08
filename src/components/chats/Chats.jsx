import React from "react";
import "./chats.style.scss";
const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
        <div className="userChatInfo">
          <span>Fatma</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
        <div className="userChatInfo">
          <span>Fatma</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
        <div className="userChatInfo">
          <span>Fatma</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
