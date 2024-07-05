import { useEffect, useState } from "react";
import "./Notes.css";

interface AddCollectionProps {
  onAddCollection: (name: string) => void;
}

const AddCollection = ({ onAddCollection }: AddCollectionProps) => {
  const [collectionName, setCollectionName] = useState("");
  const [isAddBtnEnabled, setIsAddBtnEnabled] = useState(false);

  useEffect(() => {
    setIsAddBtnEnabled(collectionName !== "");
  }, [collectionName]);

  const handleAddCollection = () => {
    onAddCollection(collectionName);
  };

  return (
    <div
      className="add-collection-container"
      onClick={(e) => e.stopPropagation()}
    >
      <h3>Enter the name of the collection</h3>
      <input
        className="add-collection-input"
        type="text"
        placeholder="Collection name"
        onChange={(e) => setCollectionName(e.target.value)}
      />
      <button
        className="add-btn"
        disabled={!isAddBtnEnabled}
        onClick={handleAddCollection}
      >
        Add
      </button>
    </div>
  );
};

export default AddCollection;
