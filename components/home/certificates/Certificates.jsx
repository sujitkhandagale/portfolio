import React from "react";
import style from "./certs.module.scss";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

function Certificates() {
  const imageLocation = process.env.APP_URL;
  console.log("imageLocation", imageLocation);
  const ImagePreviewInNewTab = (imageLink) => {
    window.open(imageLink, "_blank");
  };

  return (
    <div>
      <h2>Certification</h2>
      <div className={style.certs}>
        {CertificatesList.map((cert, index) => (
          <div key={index} className={style.certificate}>
            <div
              onClick={() =>
                ImagePreviewInNewTab(`${imageLocation}${cert.image}`)
              }
              className={style.image}
            >
              <img
                alt="certificate"
                width={1920}
                height={1080}
                src={`${process.env.APP_URL}/${cert.image}`}
              />

              <div className={style.details}>
                <h3>{cert.name}</h3>
                <p>{cert.company}</p>
                <p>{cert.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;

const CertificatesList = [
  {
    name: "Full Stack Web Development",
    image: "certificates/1689870516428.jpeg",
    year: "2022",
    company: "UpGrad Campus",
    verificationLink:
      "https://www.freecodecamp.org/certification/karanjain/full-stack-development",
  },
];
