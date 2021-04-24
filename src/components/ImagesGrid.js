import React from "react";
import { useFireStore } from "../hooks/useFireStore";
import { motion } from "framer-motion";

export const ImagesGrid = ({ setSelectedimg }) => {
  const { doc } = useFireStore("images");
  return (
    <div className='img-grid'>
      {doc &&
        doc.map((doc) => (
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            className='img-wrap'
            key={doc.id}
            onClick={() => setSelectedimg(doc.url)}>
            <motion.img
              src={doc.url}
              alt='uploaded pic '
              intial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};
