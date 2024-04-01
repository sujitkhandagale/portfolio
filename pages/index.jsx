import React from "react";
import Layouts from "@/components/layouts/Layouts";
import Introduction from "@/components/home/introduction/Introduction";
import Technology from "@/components/home/technology/Technology";
import Certificates from "@/components/home/certificates/Certificates";
import Head from "next/head";

function Index() {
  return (
    <Layouts>
      <Head>
        <title>Introduction page</title>
        <meta name="description" content="Introduction page" />
        {/*    favicon*/}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={"container"}>
        <Introduction />
        <Technology />
        <Certificates />
      </div>
    </Layouts>
  );
}

export default Index;
