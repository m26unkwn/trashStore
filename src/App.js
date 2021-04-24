import "./App.css";
import { Form } from "./components/Form";
import { Title } from "./components/Title";
import { ImagesGrid } from "./components/ImagesGrid";
import { useState } from "react";
import { Modal } from "./components/Modal";
function App() {
  const [selectedImg, setSelectedimg] = useState(null);
  return (
    <div className='App'>
      <Title />
      <Form />
      <ImagesGrid setSelectedimg={setSelectedimg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} nullBackdrop={setSelectedimg} />
      )}
    </div>
  );
}

export default App;
