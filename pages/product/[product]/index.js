import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
// components
import Product from "../../../components/product/Product";
import Description from "../../../components/product/Description";
4;
import Gallery from "../../../components/product/Gallery";
import Suggestions from "../../../components/product/Suggestions";
import Category from "../../../components/shared/Category";
import About from "../../../components/shared/About";
import Footer from "../../../components/shared/Footer";

function Index() {
  const {
    query: { product },
  } = useRouter();

  return (
    <>
      <Head>
        <title>
          AudioPhile |{" "}
          {product.split("-")[1][0].toLocaleUpperCase() + product.split("-")[1]}
        </title>
      </Head>
      <section>
        <Product product={product} />

        <Description product={product} />

        <Gallery product={product} />

        <Suggestions product={product} />

        <Category />

        <About />

        <Footer />
      </section>
    </>
  );
}

export default Index;
