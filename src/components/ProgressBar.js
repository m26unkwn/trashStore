import React from "react";
import { useEffect } from "react";
import useStoarage from "../hooks/useStorage";
export const ProgressBar = (props) => {
  const { url, progress } = useStoarage(props.file);
  console.log(progress);

  useEffect(() => {
    if (url) {
      props.setFile(null);
    }
  }, [props, url]);

  return <div className='progress-bar' style={{ width: progress + "%" }}></div>;
};
