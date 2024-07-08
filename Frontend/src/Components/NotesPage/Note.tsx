// Note.js
import React, { useState } from "react";
import "./Notes.css";

const Note = () => {
  const [selectedNote, setSelectedNote] = useState("");
  const notes = ["Note1", "Note2", "Note3", "Note4", "Note5", "Note6", "Note7"];

  const handleNoteClick = (note: string) => {
    setSelectedNote(note);
  };

  return (
    <div className="notes-container">
      <div className="note-info">
        <ul className="notes-list">
          {notes.map((note, index) => (
            <li
              key={index}
              className="note-in-list"
              onClick={() => handleNoteClick(note)}
            >
              {note}
            </li>
          ))}
        </ul>
      </div>
      <div className="note-editor">
        {selectedNote ? (
          <div>
            <h2>{selectedNote}</h2>
            <textarea className="note" defaultValue={selectedNote} />
          </div>
        ) : (
          <div>Select a note to edit</div>
        )}
      </div>
    </div>
  );
};

export default Note;
