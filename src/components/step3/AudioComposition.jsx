import React, { useEffect, useState } from "react";
//components
import JPImage from "./JPImage";
//data
import { compositionExample } from "../../mocks/composition";
//styles
import "./Step3.style.css";
//libraries
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
  getVelocity,
} from "framer-motion";
import { Slideshow } from "./Slideshow";
import JPAnimation from "./JPAnimationB";


const AudioComposition = () => {
    return(<audio src={[compositionExample]}/>)
}

export default AudioComposition;
