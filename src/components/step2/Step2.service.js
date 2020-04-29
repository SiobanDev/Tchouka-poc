export function addNoteToDom(noteImage, allNotesWidth, setallNotesWidth) {
  const stave1Element = document.getElementById("stave1");
  const stave2Element = document.getElementById("stave2");
  const noteElement = document.createElement("img");
  noteElement.src = noteImage;
  noteElement.className = `added-note`;
  noteElement.width = 50;
  noteElement.style.left = `${allNotesWidth}px`;

  stave1Element.width = 1000;

  if ((noteImage, allNotesWidth, setallNotesWidth)) {
    if (stave1Element.width >= (allNotesWidth + noteElement.width)) {
      stave1Element.appendChild(noteElement);
     ;
    } else if (
      stave1Element.width < allNotesWidth + noteElement.width &&
      allNotesWidth <= 2000
    ) {
      noteElement.style.left = `${allNotesWidth - 1000}px`;
      stave2Element.appendChild(noteElement);
    } else if(allNotesWidth > 2000) {
      console.log("Tu ne peux plus rajouter de notes.");
    }else {
      console.log("Erreur");
    }
    setallNotesWidth(allNotesWidth + parseInt(noteElement.width));
    console.log("noteElement.width: " + noteElement.width);
    console.log("allNotesWidth" + allNotesWidth)
  }
}

export function addNoteToContext(newNote, partitionNotesList) {
  partitionNotesList.push(newNote);
  // console.log("partitionNotesList" + JSON.stringify(partitionNotesList))
}
