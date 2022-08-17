import React from "react";
import { useRouter } from "next/router";
// components
import Product from "../../../components/product/Product";
import Description from "../../../components/product/Description";
4;
import Category from "../../../components/shared/Category";
import About from "../../../components/shared/About";
import Footer from "../../../components/shared/Footer";

function Index() {
  const {
    query: { product },
  } = useRouter();

  return (
    <section>
      <Product product={product} />

      <Description product={product} />

      <Category />

      <About />

      <Footer />
    </section>
  );
}

export default Index;
