import React from "react";
// icons
import { MdClose, MdShoppingCart } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";
// context
import { useGlobal } from "../../context";
// css
import cartStyles from "../../styles/shared/Cart.module.css";

const Cart = () => {
  const { cartOpen, setCartOpen } = useGlobal();

  return (
    <section
      className={`${cartStyles.cart} ${cartOpen && cartStyles.showCart}`}
    >
      <div className={cartStyles.container}>
        <header>
          <p className={cartStyles.title}>CART</p>

          <MdClose onClick={() => setCartOpen(false)} />
        </header>

        <section className={cartStyles.items}>
          <div className={cartStyles.item}>
            <img
              src="/assets/product-zx9-speaker/desktop/image-product.jpg"
              alt="product"
            />

            <div className={cartStyles.info}>
              <p>ZX9</p>
              <p>$ 4,500</p>
            </div>

            <div className={cartStyles.quantity}>
              <FaMinus />
              <p>1</p>
              <FaPlus />
            </div>
          </div>
        </section>

        <footer>
          <div>
            <p>TOTAL</p>
            <p>$ 4,500</p>
          </div>

          <button>
            <MdShoppingCart />
            <p>CHECKOUT</p>
          </button>
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
