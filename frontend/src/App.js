import React from "react";
import BodyComp from "./components/BodyComp";
import NavComp from "./components/NavComp";
import "./styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <NavComp />
      <BodyComp />
    </div>
  );
};

export default App;
