import { useState } from "react";
import withAuth from "../WithAuth";
import AddCollection from "./AddCollection";
import Collection from "./Collection";
import "./Notes.css";
import SuccessAlert from "../SuccessAlert";
import { addCollectionAsync } from "./Posts/AddCollectionAsync";

const Notes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [collectionName, setCollectionName] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddCollection = async (name: string) => {
    setCollectionName(name);
    const response = await addCollectionAsync({ collectionName });
    if (response?.status === 200) {
      closeModal();
      setAlertText(response.data);
    }
  };

  return (
    <div>
      <div className="notes">
        <Collection openModal={openModal} />
      </div>
      {isModalOpen && (
        <div className="backdrop" onClick={closeModal}>
          <AddCollection onAddCollection={handleAddCollection} />
        </div>
      )}
      {alertText && (
        <SuccessAlert alertText={alertText} onClose={() => setAlertText("")} />
      )}
    </div>
  );
};

export default withAuth(Notes);
