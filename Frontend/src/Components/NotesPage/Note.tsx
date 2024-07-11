import React, { useState } from "react";
import "./Notes.css";

const Note = () => {
  const [selectedNote, setSelectedNote] = useState("");
  const [noteContent, setNoteContent] = useState("");

  const notes = [
    "Note1",
    "Note2",
    "Note3",
    "Note4",
    "Note5",
    "Note6",
    "Note7",
    "Note4",
    "Note5",
    "Note6",
    "Note7",
    "Note4",
    "123",
    "777",
    "111",
    "444",
    "555",
  ];

  const handleNoteClick = (note: string) => {
    setSelectedNote(note);
    setNoteContent(`Content of ${note}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedNote(e.target.value);
  };

  return (
    <div className="note-container">
      <div className="note-list-wrapper">
        <ul className="note-list">
          {notes.map((note, index) => (
            <li
              key={index}
              className="note"
              onClick={() => handleNoteClick(note)}
            >
              {note}
            </li>
          ))}
        </ul>
      </div>
      <div className="note-editor">
        {selectedNote && (
          <>
            <input
              type="text"
              value={selectedNote}
              onChange={handleInputChange}
              className="note-input"
            />
            <textarea
              className="note-textarea"
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
            ></textarea>
            <div className="btn-container">
              <button className="btn btn-apply mg-10">Apply changes</button>
              <button className="btn btn-danger mg-10">Delete note</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Note;
