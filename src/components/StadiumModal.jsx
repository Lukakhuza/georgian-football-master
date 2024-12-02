// import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import classes from "./StadiumModal.module.css";

export default function StadiumModal({ children }) {
  return createPortal(
    <dialog open className={classes["modal"]}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
