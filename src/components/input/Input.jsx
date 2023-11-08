import React from "react";
import "./input.style.scss";
import { IoIosAttach } from "react-icons/io";
import { RiImageAddLine } from "react-icons/ri";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Mesajını yolla..." />
      <div className="send">
        <RiImageAddLine size={20} />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <IoIosAttach size={20} />
        </label>
        <button>Gönder</button>
      </div>
    </div>
  );
};

export default Input;
