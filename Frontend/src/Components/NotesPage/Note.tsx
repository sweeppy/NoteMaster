import React, { useState } from "react";
import "./Notes.css";
import AddIcon from "./AddIcon";

const Note = () => {
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
  const [selectedNote, setSelectedNote] = useState(notes[0]);
  const [noteContent, setNoteContent] = useState("");

  const handleNoteClick = (note: string) => {
    setSelectedNote(note);
    setNoteContent(`Content of ${note}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedNote(e.target.value);
  };

  const handleAddNote = () => {
    console.log("click");
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
        <AddIcon onAddIconClick={handleAddNote} className="add-note-icon" />
      </div>
      <div className="note-editor">
        {
          <>
            <div className="note-header">
              <input
                type="text"
                value={selectedNote}
                onChange={handleInputChange}
                className="note-input"
              />
              <div className="note-date">Updated at: 01.01.2001</div>
            </div>

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
        }
      </div>
    </div>
  );
};

export default Note;
