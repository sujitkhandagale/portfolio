import React from "react";
import style from "./tech.module.scss";
import {
  FigmaIcon,
  MongoDBIcon,
  NextJsIcon,
  NodeJsIcon,
  ReactJsIcon,
  ScssIcon,
} from "@/components/icons/IconPack";

function Technology() {
  return (
    <div>
      <h2>Technology i use</h2>
      <div className={style.technologies}>
        {TechList.map((tech, index) => (
          <div key={index} className={style.tech}>
            <div className={style.image}>{tech.image}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technology;

const TechList = [
  {
    name: "Figma",
    image: <FigmaIcon width={80} height={80} />,
  },
  {
    name: "React Js",
    image: <ReactJsIcon width={40} height={40} />,
  },
  {
    name: "Next Js",
    image: <NextJsIcon width={80} height={60} />,
  },
  {
    name: "Node Js",
    image: <NodeJsIcon width={40} height={40} />,
  },
  {
    name: "MongoDB",
    image: <MongoDBIcon width={80} height={60} />,
  },
  {
    name: "Scss",
    image: <ScssIcon width={40} height={40} />,
  },
];
