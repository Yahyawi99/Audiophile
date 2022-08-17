import React from "react";
import Head from "next/head";
// components
import Intro from "../components/home/Intro";
import Category from "../components/shared/Category";
import Latest from "../components/home/Latest";
import About from "../components/shared/About";
import Footer from "../components/shared/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>AudioPhile | Homepage</title>
      </Head>

      <section>
        <Intro />

        <Category />

        <Latest />

        <About />

        <Footer />
      </section>
    </>
  );
}
