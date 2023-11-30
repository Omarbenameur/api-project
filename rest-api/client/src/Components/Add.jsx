import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { handleAdd } from "../redux/action";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Add = () => {
  const [fullName, setFullName] = useState("test");
  const [email, setEmail] = useState("test@gmail.com");
  const [phone, setPhone] = useState("1234567890");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { fullName, email, phone };
    dispatch(handleAdd(newUser));
    closeModal();
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}>Add</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div>
            <button type="submit">Confirme</button>
            <button onClick={() => closeModal()}>Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Add;
