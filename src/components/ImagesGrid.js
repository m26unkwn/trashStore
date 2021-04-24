import React from "react";
import { useFireStore } from "../hooks/useFireStore";

export const ImagesGrid = () => {
  const { doc } = useFireStore("images");
  console.log(doc);
  return (
    <div className='img-grid'>
      {doc &&
        doc.map((doc) => (
          <div className='img-wrap' key={doc.id}>
            <img src={doc.url} alt='uploaded pic ' />
          </div>
        ))}
    </div>
  );
};
