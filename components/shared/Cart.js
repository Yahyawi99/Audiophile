import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// icons
import { MdClose, MdShoppingCart, MdOutlineShoppingBag } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";
// context
import { useGlobal } from "../../context";
// css
import cartStyles from "../../styles/shared/Cart.module.css";

const Cart = () => {
  const {
    cartOpen,
    setCartOpen,
    cart,
    addToCart,
    removeFromCart,
    cartPrice,
    formatNumber,
  } = useGlobal();

  return (
    <section
      className={`${cartStyles.cart} ${cartOpen && cartStyles.showCart}`}
    >
      <div className={cartStyles.container}>
        <header>
          <p className={cartStyles.title}>CART</p>

          <button onClick={() => setCartOpen(false)}>
            <MdClose />
          </button>
        </header>

        <section className={cartStyles.items}>
          {cart && cart.length
            ? cart.map((e) => {
                const { id, image, name, price, quantity } = e;

                return (
                  <div key={id} className={cartStyles.item}>
                    <img src={image} alt={name} />

                    <div className={cartStyles.info}>
                      <p>{name}</p>
                      <p>${price}</p>
                    </div>

                    <div className={cartStyles.quantity}>
                      <button onClick={() => removeFromCart(e)}>
                        <FaMinus />
                      </button>

                      <motion.p
                        key={quantity}
                        animate={{
                          translateY: 0,
                          opacity: 1,
                        }}
                      >
                        {quantity}
                      </motion.p>

                      <button
                        id={quantity >= 3 ? cartStyles.disableIcon : ""}
                        onClick={() => addToCart(e)}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                );
              })
            : ""}

          {(cart && cart.length > 0) || (
            <div className={cartStyles.empty}>
              <MdOutlineShoppingBag />
              <p>YOUR CART IS EPMTY</p>
            </div>
          )}
        </section>

        <footer>
          <div>
            <p>TOTAL</p>
            <motion.p
              key={cartPrice}
              animate={{
                translateX: 0,
                opacity: 1,
              }}
            >
              ${formatNumber(cartPrice)}
            </motion.p>
          </div>

          <Link href="/checkout">
            <button id={cart.length <= 0 ? cartStyles.disableButton : ""}>
              <MdShoppingCart />
              <p>CHECKOUT</p>
            </button>
          </Link>
        </footer>
      </div>

      <div
        className={cartStyles.layer}
        onClick={() => setCartOpen(false)}
      ></div>
    </section>
  );
};

export default Cart;
