import { useEffect, useState } from "react";
import "./Notes.css";

interface AddCollectionProps {
  onAddCollection: (name: string) => void;
}

const AddCollection = ({ onAddCollection }: AddCollectionProps) => {
  const [collectionName, setCollectionName] = useState("");
  const [isAddBtnEnabled, setIsAddBtnEnabled] = useState(false);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setIsAddBtnEnabled(collectionName !== "" && charCount <= 25);
  }, [collectionName]);

  const handleAddCollection = () => {
    if (collectionName.length <= 25) {
      onAddCollection(collectionName);
    }
  };

  const handleInputText = (collectionName: string) => {
    setCharCount(collectionName.length);
    setCollectionName(collectionName);
  };

  return (
    <div
      className="add-collection-container"
      onClick={(e) => e.stopPropagation()}
    >
      <h3>Enter the name of the collection</h3>

      <div className="input-wrapper">
        <input
          className={`add-collection-input ${charCount > 25 ? "border-red" : ""}`}
          type="text"
          placeholder="Collection name"
          value={collectionName}
          onChange={(e) => handleInputText(e.target.value)}
        />
        <div className="char-count">{charCount}/25</div>
      </div>

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
