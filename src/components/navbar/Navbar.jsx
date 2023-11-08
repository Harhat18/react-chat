import React, { useContext } from "react";
import "./navbar.style.scss";
import { BiLogOut } from "react-icons/bi";
import { signOut } from "@firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      {/* <span className="logo">React Chat</span> */}
      <div className="user">
        <div className="userCard">
          <img src={currentUser.photoURL} alt="" />
          <span>{currentUser.displayName}</span>
        </div>

        <button>
          <BiLogOut onClick={() => signOut(auth)} size={20} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
