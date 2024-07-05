import withAuth from "../WithAuth";
import Collection from "./Collection";
import "./Notes.css";
const Notes = () => {
  return (
    <div className="notes">
      <Collection />
    </div>
  );
};

export default withAuth(Notes);
