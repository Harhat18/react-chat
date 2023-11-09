// searchLogic.js
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

export const searchUsers = async (username, setUser, setErr) => {
  const q = query(
    collection(db, "users"),
    where("displayName", "==", username)
  );

  try {
    const querySnapshot = await getDocs(q);
    querySnapshot?.forEach((doc) => {
      setUser(doc.data());
    });
  } catch (err) {
    setErr(true);
  }
};

export const handleSelectUser = async (
  currentUser,
  user,
  setUser,
  setUsername
) => {
  const combinedId =
    currentUser?.uid > user?.uid
      ? currentUser?.uid + user?.uid
      : user?.uid + currentUser?.uid;
  try {
    const res = await getDoc(doc(db, "chats", combinedId));

    if (!res.exists()) {
      // Create a chat in chats collection
      await setDoc(doc(db, "chats", combinedId), { messages: [] });

      // Create user chats
      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [combinedId + ".userInfo"]: {
          uid: user?.uid,
          displayName: user?.displayName,
          photoURL: user?.photoURL,
        },
        [combinedId + ".date"]: serverTimestamp(),
      });

      await updateDoc(doc(db, "userChats", user?.uid), {
        [combinedId + ".userInfo"]: {
          uid: currentUser?.uid,
          displayName: currentUser?.displayName,
          photoURL: currentUser?.photoURL,
        },
        [combinedId + ".date"]: serverTimestamp(),
      });
    }
  } catch (err) {}

  setUser(null);
  setUsername("");
};
