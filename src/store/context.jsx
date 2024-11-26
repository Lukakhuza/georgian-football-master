import { createContext } from "react";

function showStadiumModal() {}

function hideStadiumModal() {}

export const SquadContext = createContext({
  players: ["x", "z"],
});
