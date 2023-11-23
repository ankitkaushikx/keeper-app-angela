import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Note from "../components/Note";
import notesData from "../notes.json";
function App() {
  return (
    <div>
      <Header />
      {notesData.map((note, index) => {
        return <Note key={index} title={note.title} content={note.content} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
