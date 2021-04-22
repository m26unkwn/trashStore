import React from "react";

export const Form = () => {
  const changeHandler = (e) => {
    let selectedFiles = e.target.files[0];
    console.log(selectedFiles);
  };
  return (
    <form>
      <input type='file' onChange={changeHandler} />
    </form>
  );
};
