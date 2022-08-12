import React from "react";
// icons
import { MdClose } from "react-icons/md";
// css
import cartStyles from "../styles/Cart.module.css";

const Cart = () => {
  return (
    <section className={cartStyles.cart}>
      <div className={cartStyles.container}>
        <header>
          <p className={cartStyles.title}>Cart</p>

          <MdClose />
        </header>
      </div>
    </section>
  );
};

export default Cart;
