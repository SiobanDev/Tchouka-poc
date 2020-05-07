import React, { useEffect } from "react";
//components

const JPImage = ({ noteData }) => {
  var count = -1;

  return noteData.movement.map((movementImageSrc) => {
    return (
      <img
        className="movement-image"
        src={movementImageSrc}
        width="300px"
        height="300px"
        alt="jean-patricia-movement"
        key={count++}
      />
    );
  });
};

export default JPImage;
