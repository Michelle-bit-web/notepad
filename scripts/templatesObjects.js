function getNoteTemplate(indexNote){
    return ` <div class="div_p_notes">
                <p>+ <b>${allNotes.notesTitles[indexNote]}</b> - ${allNotes.notes[indexNote]}</p> 
                <button onclick="deleteNotes(${indexNote})">X</button>
            </div>`
}

function getTrashNoteTemplate(indexTrashNote){
    return ` <div class="div_p_notes">
               <p>+ <b>${allNotes.trashNotesTitles[indexTrashNote]}</b> - ${allNotes.trashNotes[indexTrashNote]}</p>
               <div class="div_buttons_trashnote">
                 <button onclick="addTrashNotesAgain(${indexTrashNote})"><img src="./assets/img/recycle.PNG" alt="">
                 </button><button onclick="deleteTrashNotes(${indexTrashNote})">X</button>
                </div>
            </div>`
}