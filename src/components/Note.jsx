import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {

    return (
        <div className="note">
            <h1>
                {props.header}
            </h1>
            <p>
                {props.text}
            </p>
            <button onClick={() => { props.offItem(props.id) }}><DeleteIcon /></button>
        </div>
    );
}
export default Note;