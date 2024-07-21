import "./Notes.css";
import AddIcon from "./AddIcon";
import { useState } from "react";
import { format } from "date-fns";
import { fetchCreateNoteAsync } from "./Post/CreateNoteAsync";
import AddWindow from "./AddWindow";
import DangerAlert from "../DangerAlert";
import SuccessAlert from "../SuccessAlert";
interface NoteProps {
  notes: {
    noteId: string;
    noteTitle: string;
    noteDescription: string;
    collectinoId: string;
    updatedAt: string;
  }[];
  collectionId: string;

  UpdateNotes: () => void;
}
const Note = ({ notes, collectionId, UpdateNotes }: NoteProps) => {
  const [successAlertText, setsuccessAlertText] = useState("");
  const [dangerAlertText, setDangerAlertText] = useState("");

  const handleChangeNoteHeader = (header: string) => {
    if (selectedNote) {
      setSelectedNote({
        ...selectedNote,
        noteTitle: header,
      });
    }
  };

  const handleChangeNoteDescription = (description: string) => {
    if (selectedNote) {
      setSelectedNote({ ...selectedNote, noteDescription: description });
    }
  };

  const [selectedNote, setSelectedNote] = useState<{
    noteId: string;
    noteTitle: string;
    noteDescription: string;
    collectinoId: string;
    updatedAt: string;
  } | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddNote = async (title: string) => {
    await fetchCreateNoteAsync({ title, collectionId });
    await UpdateNotes();
    setIsModalOpen(false);
  };

  return (
    <div className="note-container">
      <div className="note-list-wrapper">
        {notes.length !== 0 ? (
          <ul className="note-list">
            {notes.map((note: any) => (
              <ol
                key={note.noteId}
                className="note"
                onClick={() => setSelectedNote(note)}
              >
                {note.noteTitle}
              </ol>
            ))}
          </ul>
        ) : (
          <div className="text">Empty</div>
        )}

        <AddIcon
          onAddIconClick={() => setIsModalOpen(true)}
          className="add-note-icon"
        />
        {isModalOpen && (
          <div className="backdrop" onClick={() => setIsModalOpen(false)}>
            <AddWindow onConfirm={handleAddNote} />
          </div>
        )}
      </div>
      <div className="note-editor">
        {selectedNote && (
          <>
            <div className="note-header">
              <input
                type="text"
                onChange={(e) => handleChangeNoteHeader(e.target.value)}
                value={selectedNote.noteTitle}
                className="note-input"
              />
              <div className="note-date">
                Updated at:{" "}
                {format(new Date(selectedNote.updatedAt), "yyyy-mm-dd HH:mm")}
              </div>
            </div>

            <textarea
              className="note-textarea"
              onChange={(e) => handleChangeNoteDescription(e.target.value)}
              value={selectedNote.noteDescription}
            ></textarea>
            <div className="btn-container">
              <button className="btn btn-apply mg-10">Apply changes</button>
              <button className="btn btn-danger mg-10">Delete note</button>
            </div>
          </>
        )}
      </div>
      {successAlertText && (
        <SuccessAlert
          alertText={successAlertText}
          onClose={() => setsuccessAlertText("")}
        />
      )}
      {dangerAlertText && (
        <DangerAlert
          alertText={dangerAlertText}
          onClose={() => setDangerAlertText("")}
        />
      )}
    </div>
  );
};

export default Note;
