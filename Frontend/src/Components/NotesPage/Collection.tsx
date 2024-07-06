import { useState } from "react";
import Icon from "./Icon";
import "./Notes.css";
import AddIcon from "./AddIcon";

interface Props {
  collections: any[];
  openModal: () => void;
}

const Collection = ({ openModal, collections }: Props) => {
  const [showItems, setShowItems] = useState(false);

  const toggleItems = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="collection-strip">
      <div className="iconContainer">
        <Icon />
      </div>

      <ul className="collection-items">
        {collections.map((collection: any) => (
          <li key={collection.Id} className="collection-item">
            {collection.collectionName}
          </li>
        ))}
      </ul>
      <AddIcon onAddIconClick={openModal} />
      <button className="logOutBtn">LogOut</button>
      <button className="nav-btn" onClick={toggleItems}>
        Menu
      </button>
    </div>
  );
};

export default Collection;
