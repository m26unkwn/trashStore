import { useState, useEffect } from "react";
import { storage, fireStore, timestamp } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //referneces

    const storageRef = storage.ref(file.name);
    const collectionRef = fireStore.collection("images");

    storageRef.put(file).on(
      "on_changed",
      (snap) => {
        let perc = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(perc);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);
  return { progress, url, error };
};

export default useStorage;
