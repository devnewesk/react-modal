import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleShow = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Modal isOpen={isOpen} toggleShow={toggleShow} />
      <button className="btn" onClick={toggleShow}>
        open modal
      </button>
      <p>Lorem ipsum dolor sit.</p>
    </>
  );
}

export default App;
