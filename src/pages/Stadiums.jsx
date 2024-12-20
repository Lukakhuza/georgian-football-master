import React, { useState, useEffect, useContext } from "react";
import classes from "./Stadiums.module.css";

import { StadiumSelectionContextProvider } from "../store/StadiumSelectionContext";
// import { StadiumSelectionContext } from "../store/StadiumSelectionContext";
import StadiumDetails from "../components/StadiumDetails";
import StadiumSelectionContext from "../store/StadiumSelectionContext";
import StadiumModal from "../components/StadiumModal";
import { name } from "ejs";

function getStadiumData() {
  return fetch(
    "https://geofootball.s3.us-east-1.amazonaws.com/data/stadiums.json"
  )
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
}

export default function Stadiums({
  title,
  fallbackText,
  onSelectStadium,
  isLoading,
  loadingText,
}) {
  const [stadiums, setStadiums] = useState([]);
  const [showStadium, setShowStadium] = useState(false);
  // const [selectedStadium, setSelectedStadium] = useState({
  //   id: "",
  //   name: "",
  //   city: "",
  // });
  const stadiumCtx = useContext(StadiumSelectionContext);
  useEffect(() => {
    getStadiumData().then((stadiums) => setStadiums(stadiums));
  }, []);

  function handleSelectStadium(stadium) {
    stadiumCtx.selectStadium(stadium);
    // setSelectedStadium({
    //   id: stadium.id,
    //   name: stadium.name,
    //   city: stadium.city,
    // });
    setShowStadium(true);

    console.log(stadium);
  }

  function handleClose() {
    setShowStadium(false);
  }

  return (
    // <StadiumSelectionContextProvider>
    <>
      {showStadium && <StadiumModal onClose={handleClose} />}
      <div className={classes["container"]}>
        {/* <StadiumDetails></StadiumDetails> */}
        <main className={classes["stadiums-category"]}>
          <h2>{title}</h2>
          <ul className={classes["stadiums"]}>
            {stadiums.map((stadium) => (
              //
              <li key={stadium.id} className={classes["stadium-item"]}>
                <button onClick={() => handleSelectStadium(stadium)}>
                  <img
                    src={`https://geofootball.s3.us-east-1.amazonaws.com/stadiums/${stadium.image.src}`}
                    alt={`${stadium.id}`}
                  />
                  <h3>{stadium.name}</h3>
                </button>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
    // </StadiumSelectionContextProvider>
  );
}
