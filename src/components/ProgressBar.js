import React from "react";
import { useEffect } from "react";
import useStoarage from "../hooks/useStorage";
import { motion } from "framer-motion";

export const ProgressBar = (props) => {
  const { url, progress } = useStoarage(props.file);
  console.log(progress);

  useEffect(() => {
    if (url) {
      props.setFile(null);
    }
  }, [props, url]);

  return (
    <motion.div
      className='progress-bar'
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}></motion.div>
  );
};
