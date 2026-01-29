import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";

export const saveHistory = async ({ uid, fileName, result }) => {
  return addDoc(collection(db, "histories"), {
    uid,
    fileName,
    result,
    createdAt: serverTimestamp(),
  });
};

export const getHistoryByUser = async (uid) => {
  const q = query(
    collection(db, "histories"),
    where("uid", "==", uid),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
