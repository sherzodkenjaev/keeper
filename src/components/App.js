import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import AddForm from "./AddForm";

function App() {
  const [allNotes, setAllNotes] = useState([]);

  function addAllNotes(notes) {
    setAllNotes((prevValue) => {
      return [...prevValue, notes];
    });
  }

  function deleteNotes(id) {
    setAllNotes((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />

      <AddForm addNotes={addAllNotes} />

      {allNotes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNotes}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
