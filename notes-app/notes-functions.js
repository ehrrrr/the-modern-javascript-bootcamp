//Read existing notes from localStorage
const getSavedNotes = function() {
    const notesJSON = localStorage.getItem("notes");
    if(notesJSON !== null) {
        return JSON.parse(notesJSON);
    } else {
        return [];
    }
}

// Save the notes to localStorage
const saveNotes = function(notes){
    localStorage.setItem("notes", JSON.stringify(notes));
}

//Generate the DOM structure for a note
const generateNoteDOM = function(note) {
    const noteEl = document.createElement("div");
    const textEl = document.createElement("span");
    const button = document.createElement("button");
    //Set delete note btn
    button.textContent = "x";
    noteEl.appendChild(button);

    if(note.title.length > 0) {
        textEl.textContent = note.title;
    } else {
        textEl.textContent = "Unnamed note"
    }
    //Set note text
    noteEl.appendChild(textEl);
    return noteEl;
}

//Render app notes
function renderNotes(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searcText.toLowerCase());
    });

    document.querySelector("#notes").innerHTML="";

    filteredNotes.forEach(function(note){
        const noteEl = generateNoteDOM(note);
        document.querySelector("#notes").appendChild(noteEl); 
    })
}