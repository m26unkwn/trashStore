import { useEffect, useState } from "react";
import { fireStore } from "../firebase/config";
export const useFireStore = (collection) => {
  const [doc, setDoc] = useState([]);

  useEffect(() => {
    const unSub = fireStore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDoc(documents);
      });
    return () => unSub();
  }, [collection]);

  return { doc };
};
