import React from "react";
import Layouts from "@/components/layouts/Layouts";
import style from "./projects.module.scss";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

function Projects() {
  return (
    <Layouts>
      <div className="container">
        <Head>
          <title>Projects</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Projects</h1>
        <div className={style.list}>
          {ProjectsList.map((project, index) => (
            <div className={style.post} key={index}>
              <div className={style.image}>
                <div className={style.image_source}>
                  <Link target={"_blank"} href={`${project.projectLink}`}>
                    <Image
                      width={1920}
                      height={1080}
                      unoptimized={true}
                      src={`${process.env.APP_URL}${project?.image}`}
                      alt="project"
                    />
                  </Link>
                </div>
              </div>
              <h2>
                <Link href={`${project.projectLink}` ?? ""}>
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
    projectLink: "https://asiaticesports.com/",
    image: "/projects/asiaticesports.com_.jpg",
    technologies: ["React Js", "Next Js", "Node Js", "MongoDB"],
  },
  {
    name: "Doctor Appointments && Consultation",
    description: " Video Platform Application, with blogging feature",
    link: "asiatic-esports",
    projectLink: "https://doctor-consultation.sujitkhandagale.in/",
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
  {
    name: "Electronic Shop",
    description:
      "This shop offers electric switches, fans, appliances and much more to full fill shop keepers need.",
    link: "asiatic-esports",
    projectLink: "https://electronic-shop.sujitkhandagale.in/",
    image: "/projects/032440.png",
    technologies: ["React Js", "Next Js", "Node Js", "MongoDB"],
  },
];
