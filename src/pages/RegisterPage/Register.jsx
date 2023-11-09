import Add from "../../img/addAvatar.png";
import "./register.style.scss";
import useRegisterLogic from "./register.logic.js";
import { Link } from "react-router-dom";
const Register = () => {
  const { err, loading, selectedImage, handleImageChange, handleSubmit } =
    useRegisterLogic();

  return (
    <div className="formContainer_register">
      <div className="formWrapper">
        <div className="left_register">
          <div className="titleContainer">
            <span className="title">Yeni Üye Kayıt</span>
          </div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Kullanıcı Adı" />
            <input type="email" placeholder="E-posta" autocomplete="off" />
            <input type="password" placeholder="Parola" autocomplete="off" />
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              onChange={handleImageChange}
            />

            {selectedImage ? (
              <label htmlFor="file">
                <img className="profil" src={selectedImage} alt="Selected" />
              </label>
            ) : (
              <label htmlFor="file">
                <img src={Add} alt="" />
                <span>Profil resmini seç</span>
              </label>
            )}
            <button disabled={loading}>Üye Ol!</button>
          </form>
          {loading ? (
            <p className="loading">Lütfen bekleyiniz... </p>
          ) : (
            err && <p className="err">Bir hata oluştu.</p>
          )}
        </div>
        <div className="right_register">
          <h1>React Chat</h1>
          <p>Mesajlaşmanın tadını çıkar</p>
          <span>Zaten üyeliğin var mı ?</span>
          <Link to="/login">
            <button>Giriş</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
