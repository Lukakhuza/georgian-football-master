import Modal from "./Modal";
import classes from "./StadiumDetails.module.css";

export default function StadiumDetails() {
  return (
    <>
      <Modal open={false} className={classes.modal}>
        <h2>Stadium Details</h2>
      </Modal>
    </>
  );
}
