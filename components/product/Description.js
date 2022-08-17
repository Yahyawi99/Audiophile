import React from "react";
import { products } from "../../data";
// css
import descriptionStyles from "../../styles/product/Description.module.css";

function Description({ product }) {
  const SingleProduct = products
    ? products.filter((e) => e.slug === product)
    : [];

  return (
    <section className={descriptionStyles.container}>
      {SingleProduct.length &&
        SingleProduct.map((e) => {
          const { id, features } = e;

          return (
            <div key={id}>
              <div className={descriptionStyles.features}>
                <h2>FEATURES</h2>

                <p>{features.split(`\n`).filter((e) => e !== "")[0]}</p>

                <p>{features.split(`\n`).filter((e) => e !== "")[1]}</p>
              </div>

              <div></div>
            </div>
          );
        })}
    </section>
  );
}

export default Description;
