import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
// components
import Intro from "../../../components/categories/Intro";
import Products from "../../../components/categories/Products";
import Category from "../../../components/shared/Category";
import About from "../../../components/shared/About";
import Footer from "../../../components/shared/Footer";

function Index() {
  const {
    query: { category },
  } = useRouter();

  return (
    <>
      <Head>
        <title>
          AudioPhile | {category[0].toLocaleUpperCase() + category.slice(1)}
        </title>
      </Head>

      <section>
        <Intro category={category} />

        <Products category={category} />

        <Category />

        <About />

        <Footer />
      </section>
    </>
  );
}

export default Index;
