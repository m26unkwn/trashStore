import React from "react";
import { useFireStore } from "../hooks/useFireStore";

export const ImagesGrid = ({ setSelectedimg }) => {
  const { doc } = useFireStore("images");
  return (
    <div className='img-grid'>
      {doc &&
        doc.map((doc) => (
          <div
            className='img-wrap'
            key={doc.id}
            onClick={() => setSelectedimg(doc.url)}>
            <img src={doc.url} alt='uploaded pic ' />
          </div>
        ))}
    </div>
  );
};
