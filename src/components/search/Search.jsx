import useSearchLogic from "./search.logic";
import "./search.style.scss";

const Search = () => {
  const { err, handleKey, handleSelect, username, setUsername, user } =
    useSearchLogic();

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
          <img src={user?.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user?.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
