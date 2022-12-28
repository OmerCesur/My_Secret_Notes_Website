import React, { useState } from "react";
import Note from "./Note";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea() {

  const [formText, setformText] = useState({
    titleText: "",
    contentText: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setformText((prevItem) => {
      return {
        ...prevItem,
        [name]: value
      };
    });
  }


  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
  }


  const [notes, setNotes] = useState([]);

  function addItem(event) {
    setNotes(
      oldArray => [...oldArray, formText]
    )
    setformText({
      titleText: "",
      contentText: ""
    }
    )
    event.preventDefault();
  }


  function deleteItem(id) {

    setNotes(notes.filter(function (aga, index) {
      return index != id;
    }));
  }


  return (
    <div>
      <form className="create-note">
        {clicked && <input onChange={handleChange} name="titleText" placeholder="Title" value={formText.titleText} />}
        <textarea onClick={handleClick} onChange={handleChange} name="contentText" placeholder="Take a note..." rows={clicked ? "3" : "1"} value={formText.contentText} />
        <Zoom in={clicked}>
          <Fab onClick={addItem}><AddIcon /></Fab>
        </Zoom>
      </form>
      {notes.map((item, index) => <Note header={item.titleText} text={item.contentText} key={index} id={index} offItem={deleteItem} />)}
    </div>
  );
}


export default CreateArea;