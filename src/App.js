import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Stadiums from "./pages/Stadiums";
import Squad from "./pages/Squad";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import PlayerDetails from "./pages/PlayerDetails";
import ContactUs from "./pages/ContactUs";
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
      { path: "/contactUs", element: <ContactUs title="Contact Us" /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
