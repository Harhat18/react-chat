import "./register.style.scss";
import Add from "../../img/addAvatar.png";
const Register = () => {
  const handleSubmit = (e) => {};
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="lefta">
          <div className="titleContainer">
            <span className="title">Yeni Üye Kayıt</span>
          </div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Kullanıcı Adı" />
            <input type="email" placeholder="E-posta" />
            <input type="password" placeholder="Parola" />
            <input style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file">
              <img src={Add} alt="" />
              <span>Add an avatar</span>
            </label>
            <button>Üye Ol!</button>
          </form>
        </div>
        <div className="righta">
          <h1>React Chat</h1>
          <p>Mesajlaşmanın tadını çıkar</p>
          <span>Zaten üyeliğin var mı ?</span>
          <a to="/login">
            <button>Giriş</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
