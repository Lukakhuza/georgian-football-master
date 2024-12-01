// import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function StadiumModal({ children, open, className = " " }) {
  // const dialog = useRef();

  // useEffect(() => {
  //   if (open) {
  //     dialog.current.showModal();
  //   }
  // }, [open]);

  return createPortal(
    <dialog
      // ref={dialog}
      open
      // className={`modal ${className}`}
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
