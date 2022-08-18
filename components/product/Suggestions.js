import React from "react";
import { useGlobal } from "../../context";
import { products } from "../../data";
import Link from "next/link";
// css
import SuggestionStyles from "../../styles/product/Suggestions.module.css";

function Suggestions({ product }) {
  const { view } = useGlobal();

  const SingleProduct = products.filter((e) => e.slug === product);

  return (
    <section className={SuggestionStyles.container}>
      <h2>YOU MAY ALSO LIKE</h2>

      <div className={SuggestionStyles.suggestions}>
        {SingleProduct.length &&
          SingleProduct.map((e) => {
            const { others } = e;

            return others.map((e, i) => {
              const { image, name, slug } = e;

              return (
                <div key={i}>
                  <img src={image[view]} alt="" />
                  <h3>{name}</h3>

                  <Link href={`/product/${slug}`}>
                    <button>SEE PRODUCT</button>
                  </Link>
                </div>
              );
            });
          })}
      </div>
    </section>
  );
}

export default Suggestions;
