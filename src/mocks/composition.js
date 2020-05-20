//data
import { partitionExample } from "./partition";
import { tchou, tchi, cla, bou, bi, dou, di, pou, pi } from "./movements";

const movementsData = [tchou, tchi, cla, bou, bi, dou, di, pou, pi];

let previousRandomId = null;
let randomId = null;

export const compositionExample = partitionExample.map((partitionNote) => {
  var compositionNote = {
    ...partitionNote,
  };
  previousRandomId = randomId;

  randomId = Math.floor(Math.random() * movementsData.length);

  if (previousRandomId === randomId && randomId !== 0) {
    randomId -= 1;
  } else if (previousRandomId === randomId && randomId === 0) {
    randomId += 1;
  }

  compositionNote = {
    ...partitionNote,
    movement: movementsData[randomId],
  };


  // console.log("randomId : " + randomId);
  // console.log("compositionNote : " + JSON.stringify(compositionNote));
  return compositionNote;
});

compositionExample.map((note) => {
  note.id += -1;
})
