 import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import classes from "./StadiumModal.module.css";

 export default function StadiumModal({ children, onClose }) {
   return createPortal(
     <>
       <div className={classes["backdrop"]} />
       <motion.dialog
         open
         className={classes["modal"]}
         variants={{
           hidden: { opacity: 0, y: 30 },
           visible: { opacity: 1, y: 0 },
         }}
         initial="hidden"
         animate="visible"
         exit="hidden"
       >
         <img
           src="https:geofootball.s3.us-east-1.amazonaws.com/stadiums/batumi-arena.png"
           alt="Batumi Arena"
         />
         {children}
         <button onClick={onClose}>Close</button>
       </motion.dialog>
     </>,
     document.getElementById("modal")
   );
 }

export default function StadiumModal({ title, children, onClose }) {
   const hiddenAnimationState = { opacity: 0, y: 30 };

  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        open
        className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
