import { useState } from "react";
import withAuth from "../WithAuth";
import AddCollection from "./AddCollection";
import Collection from "./Collection";
import "./Notes.css";

const Notes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="notes">
        <Collection openModal={openModal} />
      </div>
      {isModalOpen && (
        <div className="backdrop" onClick={closeModal}>
          <AddCollection closeModal={closeModal} />
        </div>
      )}
    </div>
  );
};

export default withAuth(Notes);
