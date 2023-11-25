import React, { useState } from "react";

function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [hidden, setHidden] = useState(true);
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });

    setHidden(value.trim() === "");
  }

  return (
    <div>
      <form className="create-note">
        <input name="title" value={note.title} placeholder="Title" onChange={handleChange} />
        {hidden ? null : (
          <React.Fragment>
            <textarea
              name="content"
              value={note.content}
              placeholder="Enter Your Content"
              onChange={handleChange}
              unmountOnExit
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                props.addNewNote(note);
                setNote({ title: "", content: "" });
              }}
              unmountOnExit
            >
              Add
            </button>
          </React.Fragment>
        )}
      </form>
    </div>
  );
}

export default CreateNote;
