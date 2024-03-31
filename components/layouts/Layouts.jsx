import React from "react";
import Navbar from "@/components/layouts/navbar/Navbar";

function Layouts({ children }) {
  return (
    <>
      <Navbar />
      <div className={"main"}>{children}</div>
    </>
  );
}

export default Layouts;
