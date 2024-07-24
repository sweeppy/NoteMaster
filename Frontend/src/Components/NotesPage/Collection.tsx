import { useState } from "react";
import Icon from "./Icon";
import "./Notes.css";
import AddIcon from "./AddIcon";
import { useNavigate } from "react-router-dom";

interface Props {
  collections: any[];
  openModal: () => void;
  onCollectionClick: (collectionId: string, noteId: string | null) => void;
}

const Collection = ({ openModal, collections, onCollectionClick }: Props) => {
  const navigate = useNavigate();

  const [selectedCollectionId, setSelectedCollectionId] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleMenuClick = () => {};

  const handleChangingCollection = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCollectionId(event.target.value);
    onCollectionClick(event.target.value, null);
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
          value={selectedCollectionId}
          onChange={handleChangingCollection}
        >
          {collections.map((collection: any) => (
            <option
              key={collection.collectionId}
              value={collection.collectionId}
            >
              {collection.collectionName}
            </option>
          ))}
        </select>
      ) : (
        <ul className="collection-items">
          {collections.map((collection: any) => (
            <li
              key={collection.collectionId}
              className="collection-item"
              onClick={() => onCollectionClick(collection.collectionId, null)}
            >
              {collection.collectionName}
            </li>
          ))}
        </ul>
      )}

      <AddIcon onAddIconClick={openModal} className="add-icon" />
      <button className="logOutBtn" onClick={handleLogout}>
        LogOut
      </button>
      <button onClick={handleMenuClick} className="nav-btn">
        Menu
      </button>
      {isMenuOpen && <div className="menu"></div>}
    </div>
  );
};

export default Collection;
