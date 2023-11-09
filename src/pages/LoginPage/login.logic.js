import { useState } from "react";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase";

const useLoginLogic = () => {
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
  return {
    err,
    loading,
    handleSubmit,
  };
};

export default useLoginLogic;
