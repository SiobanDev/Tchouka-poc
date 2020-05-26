//data
import { partitionExample } from "./partition";
import { tchou, tchi, cla, bou, bi, dou, di, pou, pi } from "./movements";

const movementsData = [tchou, tchi, cla, bou, bi, dou, di, pou, pi];
const soundsData = [
  "/medias/audio/tchou.mp3",
  "/medias/audio/tchi.mp3",
  "/medias/audio/cla.mp3",
  "/medias/audio/bou.mp3",
  "/medias/audio/bi.mp3",
  "/medias/audio/dou.mp3",
  "/medias/audio/di.mp3",
  "/medias/audio/pou.mp3",
  "/medias/audio/pi.mp3",
];

let previousRandomId = null;
let randomId = null;
let count = 0;

export const compositionExample = partitionExample.map((partitionNote) => {
  previousRandomId = randomId;

  randomId = Math.floor(Math.random() * movementsData.length);

  if (previousRandomId === randomId && randomId !== 0) {
    randomId -= 1;
  } else if (previousRandomId === randomId && randomId === 0) {
    randomId += 1;
  }

  const compositionNote = {
    id: count++,
    duration: partitionNote.duration,
    movement: movementsData[randomId],
    singingWord: soundsData[randomId],
  };

  // console.log("randomId : " + randomId);
  // console.log("compositionNote : " + JSON.stringify(compositionNote));
  return compositionNote;
});
