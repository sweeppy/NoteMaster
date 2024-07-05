import { useState } from "react";
import withAuth from "../WithAuth";
import AddCollection from "./AddCollection";
import Collection from "./Collection";
import "./Notes.css";
import SuccessAlert from "../SuccessAlert";
import { addCollectionAsync } from "./Posts/AddCollectionAsync";
import DangerAlert from "../DangerAlert";

const Notes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successAlertText, setsuccessAlertText] = useState("");
  const [dangerAlertText, setDangerAlertText] = useState("");
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
      setsuccessAlertText(response.data);
    } else {
      setDangerAlertText(response?.data);
    }
    closeModal();
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
      {successAlertText && (
        <SuccessAlert
          alertText={successAlertText}
          onClose={() => setsuccessAlertText("")}
        />
      )}
      {dangerAlertText && (
        <DangerAlert
          alertText={dangerAlertText}
          onClose={() => setDangerAlertText("")}
        />
      )}
    </div>
  );
};

export default withAuth(Notes);
