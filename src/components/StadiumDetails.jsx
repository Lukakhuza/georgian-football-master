import StadiumsModal from "./StadiumModal";
import classes from "./StadiumDetails.module.css";

export default function StadiumDetails() {
  return (
    <>
      <StadiumsModal open={true} className={classes.modal}>
        <h2>Stadium Details</h2>
      </StadiumsModal>
    </>
  );
}
