import "./login.style.scss";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="left">
          <h1>React Chat</h1>
          <p>Mesajlaşmanın tadını çıkar</p>
          <span>Hala üyeliğin yok mu ?</span>
          <a to="/register">
            <button>Kayıt Ol!</button>
          </a>
        </div>
        <div className="right">
          <div className="titleContainer">
            <span className="title">Giriş</span>
          </div>
          <form>
            <input type="email" placeholder="E-posta" />
            <input type="password" placeholder="Parola" />
            <button>Giriş Yap!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
