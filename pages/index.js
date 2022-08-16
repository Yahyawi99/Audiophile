import React from "react";
import Head from "next/head";
// components
import Intro from "../components/home/Intro";
import Category from "../components/shared/Category";
import Latest from "../components/home/Latest";
// css
import homeStyles from "../styles/home/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>AudioPhile | Homepage</title>
      </Head>

      <section className={homeStyles.container}>
        <Intro />

        <Category />

        <Latest />
      </section>
    </>
  );
}
