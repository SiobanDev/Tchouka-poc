
const noteWholeNote = {
  id: 1,
  duration: 4,
  image: "/images/four-beats-with-stave.png",
};

const noteTwoCrochets = {
  id: 2,
  duration: 2,
  image: "/images/two-beats-with-stave.png",
};

const noteCrochet = {
  id: 3,
  duration: 1,
  image: "/images/one-beat-with-stave.png",
};

const noteQuaver = {
  id: 4,
  duration: 0.5,
  image: "/images/half-beat-with-stave.png",
};

const noteSemiQuaver = {
  id: 5,
  duration: 0.25,
  image: "/images/quarter-beat-with-stave.png",
};


export const availableNotes = [
  noteWholeNote,
  noteTwoCrochets,
  noteCrochet,
  noteQuaver,
  noteSemiQuaver,
];
