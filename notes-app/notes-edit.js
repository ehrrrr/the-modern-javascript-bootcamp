'use strict'

const noteTitle = document.querySelector("#note-title");
const lastEdited = document.querySelector("#last-edited");
const noteBody = document.querySelector("#note-body");
const removeBtn = document.querySelector("#remove-note");

const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find((note)=>note.id === noteId);

if(!note) {
    location.assign("./index.html");
}

lastEdited.textContent =  generateLastEdited(note.updatedAt);

noteTitle.value = note.title;
noteTitle.addEventListener("input", (e) => {
    note.title = e.target.value;
    note.updatedAt = moment().valueOf();
    lastEdited.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`;
    saveNotes(notes);
});

noteBody.value = note.body;
noteBody.addEventListener("input", (e) => {
    note.body = e.target.value;
    note.updatedAt = moment().valueOf();
    lastEdited.textContent =  generateLastEdited(note.updatedAt);
    saveNotes(notes);
});


removeBtn.addEventListener("click", () => {
    removeNote(noteId);
    saveNotes(notes);
    location.assign("./index.html");
});

window.addEventListener("storage", (e) => {
    if(e.key==="notes") {
        notes = JSON.parse(e.newValue);

        note = notes.find(function(note){
            return note.id === noteId;
        })

        if(!note) {
            location.assign("./index.html");
        }
        
        noteTitle.value = note.title;     
        noteBody.value = note.body;
        lastEdited.textContent =  generateLastEdited(note.updatedAt);
    }
});