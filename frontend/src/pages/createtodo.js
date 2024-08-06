import { useState, useEffect } from "react";
import axios from "axios";

function createTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const createApi = async () => {
    const payload = {
      title: title,
      description: description,
    };

    try {
      await axios, "http://localhost:6000/api/create";
    } catch (err) {
      console.log("Failed");
    }
  };

  return (
    <div className="todocr">
      <form>
        <div className="inputs">
          <label>Title</label>
          <input value={title} onChange={handleTitleChange} />
        </div>
        <div className="inputs">
          <label>Title</label>
          <input value={description} onChange={handleDescriptionChange} />
        </div>
      </form>

      <button onClick={createApi}>Submit</button>
    </div>
  );
}
