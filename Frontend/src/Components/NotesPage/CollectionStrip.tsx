import { useState } from "react";
import Icon from "./Icon";
import "./Notes.css";
import AddIcon from "./AddIcon";
import { useNavigate } from "react-router-dom";

interface Props {
  collections: any[];
  openModal: () => void;
}

const Collection = ({ openModal, collections }: Props) => {
  const navigate = useNavigate();
  const [selectedCollection, setSelectedCollection] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleChangingCollection = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCollection(event.target.value);
  };
  const maxCollections = 5;
  return (
    <div className="collection-strip">
      <div className="iconContainer">
        <Icon />
      </div>
      {collections.length > maxCollections ? (
        <select
          className="collection-select"
          value={selectedCollection}
          onChange={handleChangingCollection}
        >
          {collections.map((collection: any) => (
            <option
              key={collection.collectionId}
              value={collection.collectionName}
            >
              {collection.collectionName}
            </option>
          ))}
        </select>
      ) : (
        <ul className="collection-items">
          {collections.map((collection: any) => (
            <li key={collection.collectionId} className="collection-item">
              {collection.collectionName}
            </li>
          ))}
        </ul>
      )}

      <AddIcon onAddIconClick={openModal} className="add-icon" />
      <button className="logOutBtn" onClick={handleLogout}>
        LogOut
      </button>
      <button className="nav-btn">Menu</button>
    </div>
  );
};

export default Collection;
