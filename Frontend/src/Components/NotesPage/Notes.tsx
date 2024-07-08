import { useEffect, useState } from "react";
import withAuth from "../WithAuth";
import AddCollection from "./AddCollection";
import Collection from "./Collection";
import "./Notes.css";
import SuccessAlert from "../SuccessAlert";
import { addCollectionAsync } from "./Post/AddCollectionAsync";
import DangerAlert from "../DangerAlert";
import { GetCollectionsAsync } from "./Get/GetCollectionsAsync";

const Notes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successAlertText, setsuccessAlertText] = useState("");
  const [dangerAlertText, setDangerAlertText] = useState("");

  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetchCollections();
  }, []);
  const fetchCollections = async () => {
    try {
      const response = await GetCollectionsAsync();
      if (response.status == 200) {
        const data = response.data;
        const collectoinsArray = data["$values"].map((item: any) => ({
          collectionId: item.id,
          collectionName: item.collectionName,
        }));
        setCollections(collectoinsArray);
      } else {
        console.error(
          `Failed to getch collections. Status: ${response.status}`
        );
      }
    } catch (error) {
      console.error(`Error fetching collections: ${error}`);
    }
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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

  return (
    <div>
      <div className="notes">
        <Collection collections={collections} openModal={openModal} />
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
