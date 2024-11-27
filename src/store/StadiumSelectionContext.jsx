import { createContext, useState } from "react";

const StadiumSelectionContext = createContext({
  stadium: "",
  selectStadium: () => {},
});

export function StadiumSelectionContextProvider({ children }) {
  const [stadiumSelection, setStadiumSelection] = useState("");

  function selectStadium(stadium) {
    console.log("context updated to 1");
    setStadiumSelection(stadium);
  }

  const stadiumSelectionCtx = {
    stadium: stadiumSelection,
    selectStadium,
  };

  return (
    <StadiumSelectionContext.Provider value={stadiumSelectionCtx}>
      {children}
    </StadiumSelectionContext.Provider>
  );
}

export default StadiumSelectionContext;
