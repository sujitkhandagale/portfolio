import React from "react";
import Layouts from "@/components/layouts/Layouts";
import Introduction from "@/components/home/introduction/Introduction";
import Technology from "@/components/home/technology/Technology";

function Index() {
  return (
    <Layouts>
      <div className={"container"}>
        <Introduction />
        <Technology />
      </div>
    </Layouts>
  );
}

export default Index;
