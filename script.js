let notes = ['banana', 'grün'];

let trashNotes = [];
//Fürs eigene Projekt: Dialog, der sich öffnen lässt (dort gelöschte Notes)
// Design vllt wie ein typisches Notizheft. leicht gelb, graue Lines, header als Ringblock, curly Schrift

function renderNotes(){
    let contentRef = document.getElementById('content')
    contentRef.innerHTML = ""

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function getNoteTemplate(indexNote){
    return ` <p>+ ${notes[indexNote]} <button onclick="deleteNotes(${indexNote})">X</button></p>`
}

function addNote(){
    let noteInputRef = document.getElementById('note_input')
    let noteInput = noteInputRef.value;

    notes.push(noteInput);

    renderNotes();

    noteInputRef.value = "";
}

function deleteNotes(indexNote){
   let trashNote = notes.splice(indexNote, 1);
   trashNotes.push(trashNote);
    renderNotes();
    renderTrashNotes();
}

//notizen archivieren
function renderTrashNotes(){
    let trashContentRef = document.getElementById('trash_content')
    trashContentRef.innerHTML = ""

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}

function getTrashNoteTemplate(indexTrashNote){
    return ` <p>+ ${trashNotes[indexTrashNote]} <button onclick="addTrashNotesAgain(${indexTrashNote})">+</button><button onclick="deleteTrashNotes(${indexTrashNote})">X</button></p>`
}

function deleteTrashNotes(indexTrashNote){
   trashNotes.splice(indexTrashNote, 1);
     renderTrashNotes();
 }

 function addTrashNotesAgain(indexTrashNote){
    notes.push(trashNotes[indexTrashNote]);

    renderNotes();
    renderTrashNotes();
 }