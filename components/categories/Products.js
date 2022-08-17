import React from "react";
import { useGlobal } from "../../context";
import { products } from "../../data";
// css
import productStyles from "../../styles/categories/Products.module.css";

const Products = ({ category: filter }) => {
  const { sortArr, isFloat, view } = useGlobal();

  let data = products.filter((e) => e.category === filter);
  data = sortArr(data);

  return (
    <section className={productStyles.container}>
      {data.map((e, index) => {
        const {
          id,
          category,
          slug,
          new: isNew,
          shortName,
          categoryImage,
          description,
        } = e;

        return (
          <div key={id} className={productStyles.product}>
            <img
              className={`${isFloat(index) && productStyles.toRight}`}
              src={categoryImage[view]}
              alt={slug}
            />

            <div>
              {isNew && <p className={productStyles.new}>NEW PRODUCT</p>}

              <span>
                <h2>{shortName}</h2>
                <h2>{category.toLocaleUpperCase()}</h2>
              </span>

              <p>{description}</p>
              <button>SEE PRODUCT</button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Products;
