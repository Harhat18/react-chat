import "./input.style.scss";
import { IoIosAttach } from "react-icons/io";
import { RiImageAddLine } from "react-icons/ri";
import useInputLogic from "./input.logic";

const Input = () => {
  const { text, setText, setImg, handleSend } = useInputLogic();

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Mesaj Yaz..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <IoIosAttach className="attach" size={20} />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <RiImageAddLine className="image" size={20} />
        </label>
        <button onClick={handleSend}>Gönder</button>
      </div>
    </div>
  );
};

export default Input;
