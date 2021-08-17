import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function AddForm(props) {
  const [notes, setNotes] = useState({
    title: "",
    content: "",
  });

  const [isSet, setIsSet] = useState(false);

  function setArea() {
    setIsSet(true);
  }

  function recordTitle(event) {
    const { name, value } = event.target;

    setNotes((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function addNotes(event) {
    props.addNotes(notes);
    event.preventDefault();
    setNotes({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form className="create-note">
        {isSet ? (
          <input
            name="title"
            value={notes.title}
            placeholder="Title"
            onChange={recordTitle}
          />
        ) : null}
        <textarea
          onClick={setArea}
          rows={isSet ? "3" : "1"}
          name="content"
          value={notes.content}
          placeholder="Take a note..."
          onChange={recordTitle}
        />
        <Zoom in={isSet}>
          <Fab onClick={addNotes}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default AddForm;
