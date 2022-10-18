import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//https://codepen.io/ryasan86/pen/bGpqdYV
const Skills = () => {
  var desc;
  const texts: string[] = [
    "React",
    "GraphQL",
    "TypeScript",
    "Prisma",
    "Apollo",
    "NodeJS",
    "Express",
    "JWT",
    "Figma",
    "Git",
    "Netlify",
    "Heroku",
    "Angular",
    "SSR",
    "_Lodash",
    "Python",
    "Redux",
    "REST",
    "Cloudinary",
    "Firebase",
    "SCSS",
    "TDD",
    "Ionic",
  ];

  document.onmousemove = function (e) {
    var x = e.clientX;
    var y = e.clientY;
    document.getElementById("cs")!.style.marginLeft = 100 + x / 10 + "px";
    document.getElementById("cs")!.style.marginTop = 100 + y / 10 + "px";
    document.getElementById("React")!.style.marginLeft = 100 + x / 10 + "px";
    document.getElementById("React")!.style.marginTop = 100 + y / 10 + "px";
  };

  const axiosInstance = axios.create();
  axiosInstance
    .get("idk")
    .then((response) => {
      desc = response.data;
    })
    .catch(console.error);

  return (
    <>
      <div id="skills">
        <h1 id="title">Skills</h1>
        <Link to="/">
          <button id="homePageBtn">HomePage</button>
        </Link>
        <div id="codeNames">{JSON.stringify(texts)}</div>
        <div id="codeNames"> texts </div>
      </div>

      <p className="scribble" id="cs">
        C#
      </p>
      <p className="scribble" id="React">
        React
      </p>
    </>
  );
};

export default Skills;
