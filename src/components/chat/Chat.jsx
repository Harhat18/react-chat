import React from "react";
import "./chat.style.scss";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { CgMoreAlt } from "react-icons/cg";
import Messages from "../messages/Messages";
import Input from "../input/Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Fatma</span>
        <div className="chatIcons">
          <AiOutlineUserAdd size={20} />
          <AiOutlineVideoCamera size={20} />
          <CgMoreAlt size={20} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
