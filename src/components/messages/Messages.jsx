import React from "react";
import "./messages.style.scss";
import Message from "../message/Message";
const Messages = () => {
  return (
    <div className="messages">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
