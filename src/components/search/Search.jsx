import { useContext, useState } from "react";
import "./search.style.scss";
import { AuthContext } from "../../context/AuthContext";
import { searchUsers, handleSelectUser } from "./search.logic";
const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = () => {
    searchUsers(username, setUser, setErr);
  };
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = () => {
    handleSelectUser(currentUser, user, setUser, setUsername); // Use the function from searchLogic
  };
  return (
    <div className="search">
      <div className="searcForm">
        <input
          type="text"
          placeholder="Kullanıcıları Bul..."
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        ></input>
      </div>
      {err && <span>Kullanıcı Bulunamadı</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
