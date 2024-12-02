// import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import classes from "./StadiumModal.module.css";

export default function StadiumModal({ children }) {
  return createPortal(
    <>
      <div className={classes["backdrop"]} />
      <motion.dialog open className={classes["modal"]}>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
