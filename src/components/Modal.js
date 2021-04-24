import React from "react";

export const Modal = ({ selectedImg, nullBackdrop }) => {
  const clickHandler = (e) => {
    if (e.target.classList.contains("backdrop")) {
      nullBackdrop(null);
    }
  };
  return (
    <div className='backdrop' onClick={clickHandler}>
      <img src={selectedImg} alt='uploaded_image' />
    </div>
  );
};
