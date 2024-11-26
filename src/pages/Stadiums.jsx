import React, { useState, useEffect } from "react";
import classes from "./Stadiums.module.css";
// import StadiumDetails from "../components/StadiumDetails";

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

  useEffect(() => {
    getStadiumData().then((stadiums) => setStadiums(stadiums));
  }, []);

  return (
    <div className={classes["container"]}>
      {/* <StadiumDetails></StadiumDetails> */}
      <main className={classes["stadiums-category"]}>
        <h2>{title}</h2>
        <ul className={classes["stadiums"]}>
          {stadiums.map((stadium) => (
            //
            <li key={stadium.id} className={classes["stadium-item"]}>
              <button onClick={() => onSelectStadium()}>
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
  );
}
