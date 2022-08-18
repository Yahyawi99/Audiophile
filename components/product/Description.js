import React from "react";
import { products } from "../../data";
// icons
import { FaBox } from "react-icons/md";
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
          const { id, features, includes } = e;

          return (
            <div key={id}>
              <div className={descriptionStyles.features}>
                <h2>FEATURES</h2>

                <p>{features.split(`\n`).filter((e) => e !== "")[0]}</p>

                <p>{features.split(`\n`).filter((e) => e !== "")[1]}</p>
              </div>

              <div className={descriptionStyles.box}>
                <h2>IN THE BOX</h2>

                <div>
                  {includes.map((e, i) => {
                    const { quantity, item } = e;

                    return (
                      <span key={i}>
                        <p>{quantity}x</p>
                        <p>{item}</p>
                      </span>
                    );
                  })}
                </div>

                <div className={descriptionStyles.icon}>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="styles_package__d9C9U"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
}

export default Description;
