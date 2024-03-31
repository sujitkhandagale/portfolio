import React from "react";
import Layouts from "@/components/layouts/Layouts";
import style from "./projects.module.scss";
import Link from "next/link";

function Projects() {
  return (
    <Layouts>
      <div className="container">
        <h1>Projects</h1>
        <div className={style.list}>
          {ProjectsList.map((project, index) => (
            <div className={style.post} key={index}>
              <img
                src={`${process.env.APP_URL}${project.image}`}
                alt="project"
              />
              <h2>
                <Link href={`?preview=${project.link}` ?? ""}>
                  {project.name}
                </Link>
              </h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layouts>
  );
}

export default Projects;
const ProjectsList = [
  {
    name: "Asiatic Esports",
    description: " Video Platform Application, with blogging feature",
    link: "asiatic-esports",
    projectLink: "https://github.com/karanjain/asiatic-esports",
    image: "/projects/asiaticesports.com_.jpg",
    technologies: ["React Js", "Next Js", "Node Js", "MongoDB"],
  },
  {
    name: "Doctor Appointments && Consultation",
    description: " Video Platform Application, with blogging feature",
    link: "asiatic-esports",
    projectLink: "https://github.com/karanjain/asiatic-esports",
    image: "/projects/doctor-consultation.webp",
    technologies: ["React Js", "Next Js", "Node Js", "MongoDB"],
  },
  {
    name: "Bus Ticketing App",
    description: " Video Platform Application, with blogging feature",
    link: "asiatic-esports",
    projectLink: "https://transport.sujitkhandagale.in/",
    image: "/projects/bus-booking-template.webp",
    technologies: ["React Js", "Next Js", "Node Js", "MongoDB"],
  },
];
