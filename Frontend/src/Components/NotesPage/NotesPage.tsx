import { useEffect, useState } from "react";
import withAuth from "../WithAuth";
import Collection from "./Collection";
import "./Notes.css";
import SuccessAlert from "../SuccessAlert";
import { addCollectionAsync } from "./Post/AddCollectionAsync";
import DangerAlert from "../DangerAlert";
import Note from "./Note";
import { FetchCollectionsAsync } from "./Get/GetCollectionsAsync";
import { getAllNotesAsync } from "./Post/GetNotes";
import AddWindow from "./AddWindow";

const Notes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successAlertText, setsuccessAlertText] = useState("");
  const [dangerAlertText, setDangerAlertText] = useState("");

  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetchCollections();
  }, []);

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
    setIsModalOpen(false);
  };

  const [notes, setNotes] = useState([]);
  const [collectionId, setCollectionId] = useState("");

  const handleGetNotesByCollectionId = async (collectionId: string) => {
    const response = await getAllNotesAsync(collectionId);
    const data = response?.data;

    const notesArray = data.map((note: any) => ({
      noteId: note.id,
      noteTitle: note.title,
      noteDescription: note.description,
      noteCollectionId: note.collectionId,
      updatedAt: note.updatedAt,
    }));
    setCollectionId(collectionId);
    console.log(data);
    setNotes(notesArray);
  };

  const updateNotes = async () => {
    handleGetNotesByCollectionId(collectionId);
  };
  return (
    <div className="main-container">
      <div className="notes">
        <Collection
          collections={collections}
          openModal={() => setIsModalOpen(true)}
          onCollectionClick={handleGetNotesByCollectionId}
        />
      </div>
      {isModalOpen && (
        <div className="backdrop" onClick={() => setIsModalOpen(false)}>
          <AddWindow onConfirm={handleAddCollection} />
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
      <Note
        notes={notes}
        collectionId={collectionId}
        UpdateNotes={updateNotes}
      />
    </div>
  );
};

export default withAuth(Notes);
