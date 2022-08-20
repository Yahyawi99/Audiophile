import React from "react";
import { useGlobal } from "../../context";
// css
import SummaryStyles from "../../styles/checkout/Summary.module.css";

function Summary() {
  const { cart, formatNumber, cartPrice } = useGlobal();

  return (
    <section className={SummaryStyles.container}>
      <h2>SUMMARY</h2>

      <div className={SummaryStyles.items}>
        {cart.map((e) => {
          const { id, image, name, price, quantity } = e;

          return (
            <div key={id}>
              <img src={image} alt="product" />

              <div>
                <p>{name}</p>
                <p>${formatNumber(price)}</p>
              </div>

              <p>x{quantity}</p>
            </div>
          );
        })}
      </div>

      <div>
        <span>
          <p>Total</p>
          <p>${formatNumber(cartPrice)}</p>
        </span>

        <span>
          <p>Shipping</p>
          <p>$ 50</p>
        </span>

        <span>
          <p>VAT</p>
          <p>$ 1,079</p>
        </span>
      </div>

      <div>
        <p>Grand Total</p>
        <p>${formatNumber(cartPrice + 50 + 1079)}</p>
      </div>
    </section>
  );
}

export default Summary;
