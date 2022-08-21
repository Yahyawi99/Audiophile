import React from "react";
import { products } from "../../data";
import { useGlobal } from "../../context";
import { motion } from "framer-motion";
// icons
import { FaPlus, FaMinus } from "react-icons/fa";
// css
import productStyles from "../../styles/product/Product.module.css";

function Product({ product }) {
  const { view, addToCart, cart, removeFromCart } = useGlobal();

  const SingleProduct = products
    ? products.filter((e) => e.slug === product)
    : [];

  const productFromCart = SingleProduct.length
    ? cart.filter((e) => e.id === SingleProduct[0].id)
    : [];

  const quantityInCart = productFromCart.length
    ? productFromCart[0].quantity
    : 0;

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
                  <button
                    id={quantityInCart === 0 ? productStyles.disableIcon : ""}
                    onClick={() => removeFromCart(e)}
                  >
                    <FaMinus />
                  </button>

                  <motion.p
                    key={quantityInCart}
                    animate={{
                      translateY: 0,
                      opacity: 1,
                    }}
                  >
                    {quantityInCart}
                  </motion.p>

                  <button
                    id={quantityInCart >= 3 ? productStyles.disableIcon : ""}
                    onClick={() => addToCart(e)}
                  >
                    <FaPlus />
                  </button>
                </div>

                <button
                  id={quantityInCart >= 3 ? productStyles.disableButton : ""}
                  className={productStyles.addToCart}
                  onClick={() => addToCart(e)}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Product;
