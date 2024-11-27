import classes from "./MainNavigation.module.css";
import NavigationTab from "./NavigationTab";
// import { motion } from "framer-motion";
import { useState } from "react";
// import { Children } from "react";

function MainNavigation() {
  const [selectedTab, setSelectedTab] = useState("home");

  function handleSelect(tab) {
    setSelectedTab(tab);
  }

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <NavigationTab
            to="/"
            onSelectTab={() => handleSelect("home")}
            selectedTab={selectedTab === "home"}
          >
            Home
          </NavigationTab>

          <NavigationTab
            to="/squad"
            onSelectTab={() => handleSelect("squad")}
            selectedTab={selectedTab === "squad"}
          >
            Squad
          </NavigationTab>

          <NavigationTab
            to="stadiums"
            onSelectTab={() => handleSelect("stadiums")}
            selectedTab={selectedTab === "stadiums"}
          >
            Stadiums
          </NavigationTab>

          <NavigationTab
            to="contactUs"
            onSelectTab={() => handleSelect("contactUs")}
            selectedTab={selectedTab === "contactUs"}
          >
            Contact Us
          </NavigationTab>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
