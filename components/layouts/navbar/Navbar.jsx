import React, { useEffect } from "react";
import style from "./navbar.module.scss";
import Image from "next/image";
import Logo from "../../../assets/logo/light_logo.webp";
import { Close, Hamburger } from "@/components/icons/IconPack";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const sideRef = React.useRef();

  // click outside the sidebar to close
  useEffect(() => {
    function handleClickOutside(event) {
      if (sideRef.current && !sideRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sideRef]);
  const router = useRouter();
  const path = router.pathname;
  console.log("path", path);
  return (
    <nav>
      <div className={style.nav_items}>
        <div className={style.logo}>
          <Image
            src={Logo ?? ""}
            width={400}
            height={400}
            objectFit="contain"
            alt={"logo"}
          />
        </div>
        <div className={style.nav_links}>
          <div className={style.nav_list}>
            {Links.map((link, index) => {
              return (
                <div className={`${style.links}`} key={index}>
                  <Link
                    className={`${path === link.link ? style.active : ""}`}
                    href={link.link}
                  >
                    {link.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// nav links
const Links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
    link: "/projects",
  },
];
