import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./skillsPage.css";
import "./sphere.tsx";
//https://codepen.io/ryasan86/pen/bGpqdYV
const Skills = () => {
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
  const axiosInstance = axios.create();
  axiosInstance.get().then(Response);

  return (
    <>
      <div id="skills">
        <Link to="/">
          <button id="homePageBtn">HomePage</button>
        </Link>
        <h1 id="title">Skills</h1>
        <div>{JSON.stringify(string)}</div>
      </div>

      <div id="root"></div>
    </>
  );
};

export default Skills;
