import "../assets/styles/index.scss";

import React from "react";
import Recipes from "./Recipes";

import photo from "../assets/images/pic.jpg";
function App() {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>I'm with React, mahdi</h1>
        </section>
        <img src={photo} alt="photo" width="250" />
        <Recipes />
      </main>
    </>
  );
}

export default App;
