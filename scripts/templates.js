function getNoteTemplate(indexNote){
    return ` <p>+ <b>${notesTitles[indexNote]}</b> - ${notes[indexNote]} <button onclick="deleteNotes(${indexNote})">X</button></p>`
}

function getTrashNoteTemplate(indexTrashNote){
    return ` <p>+ <b>${trashNotesTitles[indexTrashNote]}</b> - ${trashNotes[indexTrashNote]} <button onclick="addTrashNotesAgain(${indexTrashNote})">+</button><button onclick="deleteTrashNotes(${indexTrashNote})">X</button></p>`
}