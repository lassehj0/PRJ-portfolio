import React from "react";
import { Link } from "react-router-dom";
import "./skillsPage.css";
import "./sphere.tsx";
//https://codepen.io/ryasan86/pen/bGpqdYV
const Skills = () => {
  return (
    <>
      <div id="hej">
        <Link to="/">
          <button id="homePageBtn">HomePage</button>
        </Link>
        <p>hej</p>
      </div>
      <div id="root"></div>
    </>
  );
};

export default Skills;
