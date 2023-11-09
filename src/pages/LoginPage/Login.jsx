import "./login.style.scss";
import useLoginLogic from "./login.logic.js";
import { Link } from "react-router-dom";

const Login = () => {
  const { err, loading, handleSubmit } = useLoginLogic();

  return (
    <div className="formContainer_login">
      <div className="formWrapper">
        <div className="left">
          <h1>React Chat</h1>
          <p>Mesajlaşmanın tadını çıkar</p>
          <span>Hala üyeliğin yok mu ?</span>
          <Link to="/register">
            <button>Kayıt Ol!</button>
          </Link>
        </div>
        <div className="right">
          <div className="titleContainer">
            <span className="title">Giriş</span>
          </div>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="E-posta" />
            <input type="password" placeholder="Parola" />
            <button>Giriş Yap!</button>
          </form>
          {loading ? (
            <p className="loading">Lütfen bekleyiniz... </p>
          ) : (
            err && <p className="err">Bir hata oluştu.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
