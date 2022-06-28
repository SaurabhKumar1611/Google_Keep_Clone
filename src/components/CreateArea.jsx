import React, { useState } from "react";

function CreateArea(props) {
  const [notes, setNotes] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    // console.log(event.target.value);
    const { value, name } = event.target;
    setNotes((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  
  function handleSubmit(event){
    props.onAdd(notes);
    setNotes({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={notes.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={notes.content}
        />
        <button onClick = {handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
