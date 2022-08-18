import React from "react";
// css
import SummaryStyles from "../../styles/checkout/Summary.module.css";

function Summary() {
  return (
    <section className={SummaryStyles.container}>
      <h2>SUMMARY</h2>

      <div className={SummaryStyles.items}>
        <div>
          <img src="/assets/cart/image-yx1-earphones.jpg" alt="product" />

          <div>
            <p>XX99 Mark II</p>
            <p>$ 2,999</p>
          </div>

          <p>x2</p>
        </div>
      </div>

      <div>
        <span>
          <p>Total</p>
          <p>$ 5,998</p>
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
        <p>$ 7,127</p>
      </div>
    </section>
  );
}

export default Summary;
