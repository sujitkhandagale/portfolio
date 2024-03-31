import React from "react";
import Layouts from "@/components/layouts/Layouts";
import Introduction from "@/components/home/introduction/Introduction";
import Technology from "@/components/home/technology/Technology";
import Certificates from "@/components/home/certificates/Certificates";

function Index() {
  return (
    <Layouts>
      <div className={"container"}>
        <Introduction />
        <Technology />
        <Certificates />
      </div>
    </Layouts>
  );
}

export default Index;
