//data
import { partitionExample } from "./partition";
import { tchou, tchi, cla, bou, bi, dou, di, pou, pi } from "./movements";

const movementsData = [tchou, tchi, cla, bou, bi, dou, di, pou, pi];

export const compositionExample = partitionExample.map((partitionNote) => {
  let count = 0;
  let randomId = Math.floor(Math.random() * movementsData.length);

  var compositionNote = {
    id: count++,
    ...partitionNote,
    movement: movementsData[randomId],
  };
  console.log("randomId : " + randomId);
  console.log(
    "partitionExample before splice : " + JSON.stringify(partitionExample)
  );
  partitionExample.splice(randomId, 1);
  console.log(
    "partitionExample after splice : " + JSON.stringify(partitionExample)
  );
  return compositionNote;
});
