let notesTitles = ['Aufgabe', 'Aufgabe', 'Aufgabe'];

let notes = ['banana', 'grün', 'Putzen'];

let trashNotes = [];
let trashNotesTitles = [];
//Fürs eigene Projekt: Dialog, der sich öffnen lässt (dort gelöschte Notes)
// Design vllt wie ein typisches Notizheft. leicht gelb, graue Lines, header als Ringblock, curly Schrift

function init(){
    getFromLocalStorage();
    renderNotes()
    renderTrashNotes()
}

function saveData(){
    let noteInputRef = document.getElementById('note_input')

    if(noteInputRef.value != ""){
        notesTitles.push(noteInputRef.value);
        notes.push(notes.value);
    }

    saveToLocalStorage();

    renderNotes();
    noteInputRef.value = "";
}


function saveToLocalStorage(){
    localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
    localStorage.setItem("trashNotesTitles", JSON.stringify(trashNotesTitles));
}


function getFromLocalStorage() {
   let myNotes = JSON.parse(localStorage.getItem("notes"));
   let myTitles = JSON.parse(localStorage.getItem("notesTitles"));
   let myTrashNotes = JSON.parse(localStorage.getItem("trashNotes"));
   let myTrashNotesTitles = JSON.parse(localStorage.getItem("trashNotesTitles"));

   if(myNotes == null) {renderNotes()}
   else {notes = myNotes};

    if(myTitles == null) {renderNotes()}
    else {notesTitles = myTitles};

    if(myTrashNotes == null) {renderTrashNotes()}
    else {trashNotes = myTrashNotes};

    if(myTrashNotesTitles == null) {renderTrashNotes()}
    else { trashNotesTitles = myTrashNotesTitles};
}

function renderNotes(){
    let contentRef = document.getElementById('content')
    contentRef.innerHTML = ""

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function getNoteTemplate(indexNote){
    return ` <p>+ <b>${notesTitles[indexNote]}</b> -  ${notes[indexNote]} <button onclick="deleteNotes(${indexNote})">X</button></p>`
}

function addNote(){
    let noteInputRef = document.getElementById('note_input');
    let titleInputRef = document.getElementById('note_title');

    let noteInput = noteInputRef.value;
    let titleInput = titleInputRef.value;

    if(noteInputRef.value != "" && titleInputRef.value !=""){
        notes.push(noteInput);
        notesTitles.push(titleInput);
        saveToLocalStorage();
        renderNotes();}
    else{alert('Fill in both fields, please!')}
    noteInputRef.value = "";
    titleInputRef.value = "";
}

function deleteNotes(indexNote){
   let trashNote = notes.splice(indexNote, 1);
   trashNotes.push(trashNote);
   let trashNotesTitle = notesTitles.splice(indexNote, 1);
   trashNotesTitles.push(trashNotesTitle);
   saveToLocalStorage();
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
    return ` <p>+ <b>${trashNotesTitles[indexTrashNote]}</b> - ${trashNotes[indexTrashNote]} <button onclick="addTrashNotesAgain(${indexTrashNote})">+</button><button onclick="deleteTrashNotes(${indexTrashNote})">X</button></p>`
}

function deleteTrashNotes(indexTrashNote){
   trashNotes.splice(indexTrashNote, 1);
   trashNotesTitles.splice(indexTrashNote, 1);
   saveToLocalStorage();
   renderTrashNotes();
 }

 function addTrashNotesAgain(indexTrashNote){
    notes.push(trashNotes[indexTrashNote]);
   notesTitles.push(trashNotesTitles[indexTrashNote]);
    
    deleteTrashNotes(indexTrashNote)
    saveToLocalStorage();
    renderNotes();
    renderTrashNotes();
 }