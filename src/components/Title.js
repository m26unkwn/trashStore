import React from "react";

export const Title = () => {
  return (
    <>
      <div className='heading'>
        <h1
          style={{
            textAlign: "center",

            padding: "0.75rem",
          }}>
          Trash Store 🚮
        </h1>
      </div>

      <div
        className='title'
        style={{ textAlign: "center", margin: "1rem 0", padding: "1rem" }}>
        <h3>Store whatever you want 🤪 </h3>
        <p style={{ marginTop: "1rem" }}>Trash for everyone</p>
      </div>
    </>
  );
};
