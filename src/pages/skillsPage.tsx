import React from "react";
import { Link } from "react-router-dom";

//https://codepen.io/ryasan86/pen/bGpqdYV
function Skills(props: string[]) {
  return (
    <>
      <div id="hej">
        <div id="skills">
          <h1 id="title">Skills</h1>
          <Link to="/">
            <button id="homePageBtn">HomePage</button>
          </Link>
        </div>
        <div id="codeBox"></div>
      </div>
    </>
  );
}

export default Skills;
