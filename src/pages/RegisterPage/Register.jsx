import { useState } from "react";
import Add from "../../img/addAvatar.png";
import "./register.style.scss";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Read and display the selected image
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="left_register">
          <div className="titleContainer">
            <span className="title">Yeni Üye Kayıt</span>
          </div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Kullanıcı Adı" />
            <input type="email" placeholder="E-posta" />
            <input type="password" placeholder="Parola" />
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
