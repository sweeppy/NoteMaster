import { useEffect, useState } from "react";
import { addCollectionAsync } from "./Posts/AddCollectionAsync";
import "./Notes.css";

const AddCollection = () => {
  const [collectionName, setCollectionName] = useState("");
  const [isAddBtnEnabled, setIsAddBtnEnabled] = useState(false);

  useEffect(() => {
    if (collectionName !== "") setIsAddBtnEnabled(true);
    else setIsAddBtnEnabled(false);
  });

  const handleAddCollection = async () => {
    const response = await addCollectionAsync({ collectionName });
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
        onChange={(e) => {
          setCollectionName(e.target.value);
        }}
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
