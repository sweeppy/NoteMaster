import "./Notes.css";
import AddIcon from "./AddIcon";
interface NoteProps {
  notes: never[];
}
const Note = ({ notes }: NoteProps) => {
  const handleAddNote = () => {
    console.log("click");
  };

  return (
    <div className="note-container">
      <div className="note-list-wrapper">
        {notes.length !== 0 ? (
          <ul className="note-list">
            {notes.map((note: any) => (
              <ol className="note">{note.noteTitle}</ol>
            ))}
          </ul>
        ) : (
          <div className="text">Empty collectoin.</div>
        )}

        <AddIcon onAddIconClick={handleAddNote} className="add-note-icon" />
      </div>
      <div className="note-editor">
        {
          <>
            <div className="note-header">
              <input type="text" value="" className="note-input" />
              <div className="note-date">Updated at: 01.01.2001</div>
            </div>

            <textarea className="note-textarea"></textarea>
            <div className="btn-container">
              <button className="btn btn-apply mg-10">Apply changes</button>
              <button className="btn btn-danger mg-10">Delete note</button>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default Note;
