import React, { useEffect, useState } from "react";
import { HomeImage } from "@/components/icons/IconPack";
import style from "./intro.module.scss";

function Introduction() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const list = [
    "Frontend Developer",
    "Backend Developer",
    "ReactJs Developer",
    "NextJs Developer",
    "Nodejs Developer",
    "UI/UX Designer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Get the current role
      const currentRole = list[roleIndex];
      // Check if the displayed role is fully shown
      if (displayedRole === currentRole) {
        // Increment role index

        setRoleIndex((roleIndex + 1) % list.length);

        // Reset displayed role
        setDisplayedRole("");
      } else {
        // Add one more letter to the displayed role
        setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));
      }
    }, 150); // Adjust speed here
    return () => clearInterval(interval);
  }, [roleIndex, displayedRole, list]);

  return (
    <div className={style.intro}>
      <div className={style.details}>
        <h1>Hello, {"I'm"}</h1>
        <h2>Sujit Khandagale</h2>
        <h3>
          I am a <span>{displayedRole}</span>
        </h3>
        <p>
          I develop websites and web applications. full fill your needs with
          modern technologies{" "}
        </p>
      </div>
      <div className={style.image}>
        <HomeImage width={400} height={400} />
      </div>
    </div>
  );
}

export default Introduction;
