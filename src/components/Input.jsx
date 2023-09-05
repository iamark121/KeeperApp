import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function Input(props) {
    const [isClicked, setIsClicked] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    })
    function handleChange(event) {
        // setIsClicked(true);
        const {name, value} = event.target;
        setNote(prevNote => {
          return {
            ...prevNote,
            [name]: value
            };
        });
    }
    function submitNote(event){
        props.onAdd(note);
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                {isClicked && 
                <input
                    type="text"
                    name="title"
                    placeholder="Enter title"
                    value={note.title}
                    onChange={handleChange}
                />}
                <textarea
                    type="text"
                    name="content"
                    placeholder="Take a note..."
                    value={note.content}
                    rows={isClicked ? 3: 1}
                    onClick={()=> {
                        setIsClicked(true);
                    }}
                    onChange={handleChange}
                />
                <Zoom in={isClicked}>
                    <Fab onClick={submitNote}><AddIcon/></Fab>
                </Zoom>
            </form>
        </div>
    )
}
export default Input;