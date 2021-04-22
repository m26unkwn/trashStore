import React, { useState } from "react";

export const Form = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selectedFiles = e.target.files[0];

    if (selectedFiles && types.includes(selectedFiles.type)) {
      setFile(selectedFiles);
      setError(null);
    } else {
      setFile(null);
      setError("Select an image File (png or jpeg)");
    }
  };
  return (
    <form>
      <input type='file' onChange={changeHandler} />
      <div className='output'>
        {error && <div className='error'>{error}</div>}
        {file && <div className='pictures'>{file.name}</div>}
      </div>
    </form>
  );
};
