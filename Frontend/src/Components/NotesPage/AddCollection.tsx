import "./Notes.css";
interface AddCollectionProps {
  closeModal: () => void;
}
const AddCollection = ({ closeModal }: AddCollectionProps) => {
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
      />
      <button className="add-btn">Add</button>
    </div>
  );
};

export default AddCollection;
