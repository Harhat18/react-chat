import { useState } from "react";
import "./register.style.scss";
import Add from "../../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage } from "../../firebase";

const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };

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
            <input style={{ display: "none" }} type="file" />
            <label htmlFor="file">
              <img src={Add} alt="" />
              <span>Profil resmini seç</span>
            </label>
            <button>Üye Ol!</button>
            {err && <span>Bir Hata Oluştu.</span>}
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
