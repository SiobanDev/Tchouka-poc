
const noteWholeNote = {
  id: 1,
  duration: 4,
  image: "./components/stave/stave.images/four-beats.png",
};

const noteTwoCrochets = {
  id: 2,
  duration: 2,
  image: "./components/stave/stave.images/two-beats.png",
};

const noteCrochet = {
  id: 3,
  duration: 1,
  image: "./components/stave/stave.images/one-beat.png",
};

const noteQuaver = {
  id: 4,
  duration: 0.5,
  image: "./components/stave/stave.images/half-beat.png",
};

const noteSemiQuaver = {
  id: 5,
  duration: 0.25,
  image: "./components/stave/stave.images/quarter-beat.png",
};


export const availableNotes = [
  noteWholeNote,
  noteTwoCrochets,
  noteCrochet,
  noteQuaver,
  noteSemiQuaver,
];
