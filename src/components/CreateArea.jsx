import React, { useState } from "react";

function CreateArea(props) {
  const [noteItem, setNoteItem] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    setNoteItem((prevNoteItem) => {
      return {
        ...prevNoteItem,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form>
        <input className="" name="title" placeholder="Title" value={noteItem.title} onChange={handleChange} />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteItem.content}
          onChange={handleChange}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.onClicked(noteItem);
            setNoteItem({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
