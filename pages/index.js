import Head from "next/head";
import React from "react";
import TopDesign from "../components/home/top-design";
import About from "../components/home/about";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Jewelry</title>
        <meta name="description" content="Jewlery store for final project" />
      </Head>
      <TopDesign />
      <About />
    </React.Fragment>
  );
}
