export function addNoteToDom(
  noteImage,
  allNotesWidth,
  setallNotesWidth
) {
  const stave1Element = document.getElementById("stave1");
  const stave2Element = document.getElementById("stave2");
  const noteElement = document.createElement("img");

  noteElement.src = noteImage;
  noteElement.className = `added-note`;
  noteElement.alt = "added-note-image";
  noteElement.style.width = "5%";
  noteElement.style.left = `${allNotesWidth}%`;

  stave1Element.style.width = "100%";

  const noteWidth = parseInt(noteElement.style.width);
  const stave1Width = parseInt(stave1Element.style.width);

  if ((noteImage, allNotesWidth, setallNotesWidth)) {
    if (stave1Width >= allNotesWidth + noteWidth) {

      stave1Element.appendChild(noteElement);
      setallNotesWidth(allNotesWidth + noteWidth);

      console.log("allNotesWidth : " + allNotesWidth);
      return true;

    } else if (stave1Width < allNotesWidth + noteWidth && allNotesWidth < 200) {

      noteElement.style.left = `${allNotesWidth - 100}%`;
      stave2Element.appendChild(noteElement);
      setallNotesWidth(allNotesWidth + noteWidth);

      console.log("allNotesWidth : " + allNotesWidth);
      
      return true;

    } else if (allNotesWidth >= 200) {

      console.log("Tu ne peux plus rajouter de notes.");
      return false;

    } else {

      console.log("Erreur");
      return false;

    }
  }
}

export function addNoteToContext(newNote, partitionNotesList) {
  partitionNotesList.push(newNote);
  console.log(
    "partitionNotesList in addNoteToContext()" +
      JSON.stringify(partitionNotesList)
  );
}
