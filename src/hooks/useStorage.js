import { useState, useEffect } from "react";
import { stoarage } from "../firebase/config ";

const useStoarage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //referneces

    const storageRef = Storage.ref(file.name);

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
        setUrl(url);
      }
    );
  }, [file]);
  return { progress, url, error };
};
