import React, { useState } from "react";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Note from "../components/Note";
// import notesData from "../notes.json";
import CreateNote from "./createNote";
function App() {
  const [notes, setNotes] = useState([]);

  function addNewNote(note) {
    setNotes((preNotes) => {
      return [...preNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateNote addNewNote={addNewNote} />
      {notes.map((note, index) => {
        return <Note key={index} id={index} title={note.title} content={note.content} onDeleteNote={deleteNote} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
