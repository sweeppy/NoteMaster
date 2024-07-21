import { useEffect, useState } from "react";
import "./Notes.css";

interface AddProps {
  onConfirm: (name: string) => void;
}

const AddWindow = ({ onConfirm }: AddProps) => {
  const [name, setname] = useState("");
  const [isAddBtnEnabled, setIsAddBtnEnabled] = useState(false);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setIsAddBtnEnabled(name !== "" && charCount <= 25);
  }, [name]);

  const handleAddCollection = () => {
    if (name.length <= 25) {
      onConfirm(name);
    }
  };

  const handleInputText = (name: string) => {
    setCharCount(name.length);
    setname(name);
  };

  return (
    <div
      className="add-collection-container"
      onClick={(e) => e.stopPropagation()}
    >
      <h3>Enter the title</h3>

      <div className="input-wrapper">
        <input
          className={`add-collection-input ${charCount > 25 ? "border-red" : ""}`}
          type="text"
          placeholder="Title"
          value={name}
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

export default AddWindow;
