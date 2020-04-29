export function addNote(newNote, noteImage, allNotesWidth, setallNotesWidth) {
  const stave1Element = document.getElementById("stave1");
  const stave2Element = document.getElementById("stave2");
  const stave3Element = document.getElementById("stave3");

  const noteElement = document.createElement("img");
  noteElement.src = noteImage;
  noteElement.className = `added-note note-${newNote.id}`;
  noteElement.width = 50;
  noteElement.style.left = `${allNotesWidth}px`;

  if ((newNote, noteImage, allNotesWidth, setallNotesWidth)) {
    if (stave1Element.clientWidth >= allNotesWidth + noteElement.clientWidth) {
      stave1Element.appendChild(noteElement);
     ;
    } else if (
      stave1Element.clientWidth < allNotesWidth + noteElement.clientWidth &&
      stave2Element.clientWidth >= allNotesWidth + noteElement.clientWidth
    ) {
      stave2Element.appendChild(noteElement);
    } else if (
      stave2Element.clientWidth < allNotesWidth + noteElement.clientWidth &&
      stave3Element.clientWidth >= allNotesWidth + noteElement.clientWidth
    ) {
      stave3Element.appendChild(noteElement);
    }
    setallNotesWidth(allNotesWidth + parseInt(noteElement.width));
    console.log(" noteElement.width: " + noteElement.width);
    console.log(" all partition's notes width" + allNotesWidth)
  }
}
