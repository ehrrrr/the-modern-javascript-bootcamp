const notes = getSavedNotes();

const filters = {
    searcText: ""
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", function(e){
    notes.push({ title: "", body: ""});
    saveNotes(notes);
    renderNotes(notes, filters);
})

document.querySelector("#search-text").addEventListener("input", function(e){
    filters.searcText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector("#add-note-form").addEventListener("submit", function(e){
    e.preventDefault();
    console.log(e.target.elements.addNote.value);
    e.target.elements.addNote.value = "";
});

document.querySelector("#sort-dropdown").addEventListener("change", function(e){
    console.log(e.target.value);
});