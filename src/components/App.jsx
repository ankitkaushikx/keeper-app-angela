import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Note from "../components/Note";

import CreateArea from "./CreateArea";
function App() {
  const [noteArray, setNoteArray] = useState([
    {
      title: "My New Note",
      content: "Content For My New Note",
    },
  ]);

  function addNewNote(newNoteItem) {
    setNoteArray((prevNoteArray) => {
      return [...prevNoteArray, newNoteItem];
    });
  }
  function deleteNote(itemIndex) {
    setNoteArray((prevNoteArray) => {
      return prevNoteArray.filter((item, index) => {
        return index != itemIndex;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onClicked={addNewNote} />
      {noteArray.map((noteItem, index) => {
        return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onClicked={deleteNote} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
