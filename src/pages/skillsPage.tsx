import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//https://codepen.io/ryasan86/pen/bGpqdYV
function Skills() {
  var desc;
  var lang: string[] = [
    "React",
    "GraphQL",
    "CSharp",
    "CSharp1",
    "CSharp2",
    "CSharp3",
    "CSharp4",
    "CSharp5",
    "CSharp6",
    "CSharp7",
    "CSharp8",
    "CSharp9",
  ];
  var pos = [
    [100, 100],
    [1236, 640],
    [170, 540],
    [1264, 125],
    [628, 100],
    [565, 486],
    [265, 345],
    [413, 629],
    [1186, 397],
    [853, 579],
    [218, 130],
    [886, 397],
  ];

  document.onmousemove = function (e) {
    var x = e.clientX;
    var y = e.clientY;
    lang.forEach((entry, i) => {
      var style = document.getElementById(entry)?.style;
      if (style != null) {
        style.marginLeft =
          ([1, 4, 5, 8, 10, 14, 15, 16, 19, 21].indexOf(i) != -1
            ? pos[i][0] + x / 20
            : pos[i][0] - x / 20) + "px";

        style.marginTop =
          ([2, 4, 7, 9, 10, 11, 15, 16, 17, 19, 22].indexOf(i) != -1
            ? pos[i][1] + y / 20
            : pos[i][1] - y / 20) + "px";

        style.position = "absolute";
      }
    });
  };

  const axiosInstance = axios.create();
  axiosInstance
    .get("idk")
    .then((response) => {
      desc = response.data;
    })
    .catch(console.error);

  axiosInstance
    .get("languages")
    .then((response) => {
      response.data.each((i: number, elem: string) => {
        var p = document.createElement("p");
        p.innerHTML = elem;
        document.getElementById("langs")?.appendChild(p);
      });
    })
    .catch(console.error);

  const code = (name: string) => {
    var element = document.getElementById(name);
    element!.style.fontSize = "12rem";
    var boxElement = document.getElementById("codeBox");
    boxElement!.style.opacity = "1";
    boxElement!.style.width = "";
  };

  return (
    <>
      <div id="hej">
        <div id="skills">
          <h1 id="title">Skills</h1>
          <Link to="/">
            <button id="homePageBtn">HomePage</button>
          </Link>
        </div>
      </div>
      <div id="langs">
        <p className="scribble" id="React" onClick={() => code("React")}>
          React
        </p>
        <p className="scribble" id="GraphQL">
          GraphQl
        </p>
        <p className="scribble" id="CSharp" onClick={() => code("CSharp")}>
          C#
        </p>
        <p className="scribble" id="CSharp1">
          C#1
        </p>
        <p className="scribble" id="CSharp2">
          C#2
        </p>
        <p className="scribble" id="CSharp3">
          C#3
        </p>
        <p className="scribble" id="CSharp4">
          C#4
        </p>
        <p className="scribble" id="CSharp5">
          C#5
        </p>
        <p className="scribble" id="CSharp6">
          C#6
        </p>
        <p className="scribble" id="CSharp7">
          C#7
        </p>
        <p className="scribble" id="CSharp8">
          C#8
        </p>
        <p className="scribble" id="CSharp9">
          C#9
        </p>
      </div>

      <div className="skillsBox">
        <div id="codeBox" className="codeBox"></div>
      </div>
    </>
  );
}

export default Skills;
