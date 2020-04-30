import React from "react";

export default function NotesToChoose({ imageSource, onClick }) {

  return (
    <img className="note" src={imageSource} onClick={onClick} alt="musical-note" />
  );
}
