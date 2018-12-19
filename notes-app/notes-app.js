'use strict'

let notes = getSavedNotes();

const filters = {
    searcText: "",
    sortBy: "byEdited"
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", () => {
    const createdTimestapm = moment().valueOf();
    let updatedTimestamp = moment().valueOf();
    notes.push({ id: uuidv4(), title: "", body: "", createdAt: createdTimestapm, updatedAt: updatedTimestamp});
    saveNotes(notes);
    location.assign(`/edit.html#${notes[notes.length-1].id}`);
})

document.querySelector("#search-text").addEventListener("input", (e) => {
    filters.searcText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector("#sort-dropdown").addEventListener("change", (e) => {
    filters.sortBy = e.target.value;
    console.log(filters.sortBy);
    
    renderNotes(notes,filters);
});


window.addEventListener("storage", function(e){
    if(e.key==="notes") {
        notes = JSON.parse(e.newValue);
        renderNotes(notes,filters);
    }
});

