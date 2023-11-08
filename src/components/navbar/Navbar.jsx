import React from "react";
import "./navbar.style.scss";
import { BiLogOut } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* <span className="logo">React Chat</span> */}
      <div className="user">
        <div className="userCard">
          <img
            src="https://images.pexels.com/photos/2076596/pexels-photo-2076596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span> Harun Hatiboğlu</span>
        </div>

        <button>
          <BiLogOut size={20} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
