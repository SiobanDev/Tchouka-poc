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

const Step3 = () => {
  const [playAnimation, setPlayAnimation] = useState(false);

  console.log("compositionExample : " + JSON.stringify(compositionExample));
  console.log("playAnimation : " + playAnimation);

  return (
    <section id="step3">
      <button className="btn" onClick={() => setPlayAnimation(true)}>
        Jouer
      </button>
      <div id="JP-container">
      {
      playAnimation ?
        <JPAnimation resetAnimation={() => setPlayAnimation(false)}/>
      :
        <img className="movement-image" src={compositionExample[0].movement[0]} />
    }
    </div>

    </section>
  );
  // } else {
  //   return (
  //     <section id="step3">
  //       <button
  //         className="btn"
  //         onClick={() => {
  //           setPlayAnimation(true);
  //           controls.start(variants);
  //         }}
  //       >
  //         Jouer
  //       </button>
  //       <div id="JP-container">
  //         <JPImage noteData={compositionExample[0]} />
  //       </div>
  //     </section>
  //   );
  // }
};

// const Step3 = () => {
//   var count = -1;
//   const x = useMotionValue(0);

//   const controls = useAnimation();
//   controls.start({
//     opacity: [1, 0],
//   });

//   controls.stop({
//     opacity: 0,
//   });

//   const input = [0, 1];
//   const output = [1,0];
//   const opacity = useTransform(x, input, output);

//   const variants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//   }

//   useEffect(() => {
//     compositionExample.map((note) => {
//       x.getVelocity(note.duration * 10)
//     });
//   }, []);

//   return (
//     <section id="step3">
//       <div id="JP-container">
//         {compositionExample.map((note) => {
//           return (
//             <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={variants}
//               key={count++}
//             >
//               <JPImage noteData={note} />
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

export default Step3;
