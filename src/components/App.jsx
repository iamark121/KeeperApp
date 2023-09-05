import React, { useState } from "react";
import Header from "./Header";
import Input from "./Input";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";

function App() {

    const [notes, setNotes] = useState([]);
    function addNote(note) {
        setNotes(prevNotes=>{
            return [...prevNotes, note];
        })
        // notes.push(note);
        // console.log(note.title, note.content);   
    }
    function deleteNote(id) {
        // console.log("delete note");
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => {
                return index!== id
            });
        })
    }
    return (
        <div>
            <Header />
            <Input onAdd={addNote}/>
            {notes.map( (n,i) => <Note key={i} id={i} title={n.title} content={n.content} onDelete={deleteNote}/>)}
            <Footer />
        </div>
    )
}
export default App;