import React from "react";
import { Link } from "react-router-dom";

//https://codepen.io/ryasan86/pen/bGpqdYV
function Skills(props: string[]) {
  return (
    <>
      <div id="hej">
        <div id="skills">
          <div id="title">
            <h1>Skills</h1>
            <Link to="/">
              <div
                style={{
                  position: "absolute",
                  float: "left",
                  bottom: 350,
                  left: -375,
                }}
              >
                <button className="button button1">
                  <span>Home</span>
                </button>{" "}
              </div>
            </Link>
          </div>
          <div id="skillText1">Press a code language</div>
          <div id="skillText2">Hover the bar to see more information</div>
        </div>
        <div id="skillLVL">
          Skill lvl: Noob <br></br> Experience: <br></br> 2 days
        </div>
        <div id="codeBox"></div>
      </div>
    </>
  );
}

export default Skills;
