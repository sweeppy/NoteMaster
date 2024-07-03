import { useState } from "react";
import Icon from "./Icon";
import "./Notes.css";

const Collection = () => {
  const [showItems, setShowItems] = useState(false);
  const toggleItems = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="collection-strip">
      <Icon />
      <ul className={`collection-items ${showItems ? "show" : ""}`}>
        <li className="collection-item">Note Collection 1</li>
        <li className="collection-item">Note Collection 2</li>
        <li className="collection-item">Note Collection 3</li>
        <li className="collection-item">Note Collection 4</li>
        <li className="collection-item">Note Collection 5</li>
      </ul>
      <button className={`logOutBtn ${showItems ? "show" : ""}`}>LogOut</button>
      <button className="nav-btn" onClick={toggleItems}>
        Menu
      </button>
    </div>
  );
};

export default Collection;
