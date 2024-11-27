import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Stadiums from "./pages/Stadiums";
import Squad from "./pages/Squad";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import PlayerDetails from "./pages/PlayerDetails";
import ContactUs from "./pages/ContactUs";
import { StadiumSelectionContextProvider } from "./store/StadiumSelectionContext";
import StadiumDetails from "./components/StadiumDetails";
// import { SquadContext } from "./store/context";
// import SquadContext from "./store/context.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/squad", element: <Squad /> },
      { path: "/squad/:playerdetails", element: <PlayerDetails /> },
      {
        path: "/stadiums",
        element: <Stadiums title="Stadiums in Georgia" />,
      },
      { path: "/stadiumdetails", element: <StadiumDetails /> },
      { path: "/contactUs", element: <ContactUs title="Contact Us" /> },
    ],
  },
]);

function App() {
  return (
    <StadiumSelectionContextProvider>
      <RouterProvider router={router} />
    </StadiumSelectionContextProvider>
  );
}

export default App;
