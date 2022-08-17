import React from "react";
import { products } from "../../data";
import { useGlobal } from "../../context";
// icons
import { FaPlus, FaMinus } from "react-icons/fa";
// css
import productStyles from "../../styles/product/Product.module.css";

function Product({ product }) {
  const { view } = useGlobal();

  const SingleProduct = products
    ? products.filter((e) => e.slug === product)
    : [];

  return (
    <section className={productStyles.container}>
      {SingleProduct.map((e) => {
        const {
          id,
          image,
          new: isNew,
          shortName,
          category,
          description,
          slug,
        } = e;

        return (
          <div key={id} className={productStyles.product}>
            <img src={image[view]} alt={slug} />

            <div>
              {isNew && <p className={productStyles.new}>NEW PRODUCT</p>}
              <span>
                <h2>{shortName}</h2>
                <h2>{category.toLocaleUpperCase()}</h2>
              </span>
              <p>{description}</p>

              <div className={productStyles.btns}>
                <div>
                  <button>
                    <FaMinus />
                  </button>

                  <p>0</p>

                  <button>
                    <FaPlus />
                  </button>
                </div>

                <button className={productStyles.addToCart}>ADD TO CART</button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Product;
