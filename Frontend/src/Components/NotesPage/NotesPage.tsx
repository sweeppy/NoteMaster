import { useEffect, useState } from "react";
import withAuth from "../WithAuth";
import AddCollection from "./AddCollection";
import Collection from "./Collection";
import "./Notes.css";
import SuccessAlert from "../SuccessAlert";
import { addCollectionAsync } from "./Post/AddCollectionAsync";
import DangerAlert from "../DangerAlert";
import Note from "./Note";
import { FetchCollectionsAsync } from "./Get/GetCollectionsAsync";
import { getAllNotesAsync } from "./Post/GetNotes";

const Notes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successAlertText, setsuccessAlertText] = useState("");
  const [dangerAlertText, setDangerAlertText] = useState("");

  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetchCollections();
  }, []);

  const openAddCollectionModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchCollections = async () => {
    const collectionsArray = await FetchCollectionsAsync();
    setCollections(collectionsArray);
  };

  const handleAddCollection = async (name: string) => {
    const response = await addCollectionAsync({ collectionName: name });
    if (response?.status === 200) {
      await fetchCollections();
      setsuccessAlertText(response.data);
    } else {
      setDangerAlertText(response?.data);
    }
    closeModal();
  };

  const [notes, setNotes] = useState([]);

  const handleGetNotesByCollectionId = async (collectionId: string) => {
    const response = await getAllNotesAsync(collectionId);
    const data = response?.data;

    const notesArray = data["$values"].map((note: any) => ({
      noteId: note.id,
      noteTitle: note.title,
      noteCollectionId: note.collectionId,
    }));
    console.log(notesArray);
    setNotes(notesArray);
  };

  return (
    <div className="main-container">
      <div className="notes">
        <Collection
          collections={collections}
          openModal={openAddCollectionModal}
          onCollectionClick={handleGetNotesByCollectionId}
        />
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
      <Note notes={notes} />
    </div>
  );
};

export default withAuth(Notes);
