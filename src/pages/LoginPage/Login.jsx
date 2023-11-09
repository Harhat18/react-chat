import { useState } from "react";
import "./login.style.scss";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
const Login = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };
  return (
    <div className="formContainer">
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
