import React from "react";
// css
import ShippingStyles from "../../styles/checkout/Shipping.module.css";

function Shipping() {
  return (
    <section className={ShippingStyles.container}>
      <h2>SHIPPING INFO</h2>

      <form action="POST">
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            placeholder="DOUAR EL ATIKIEEN BLOC 02 NR 16"
          />
        </div>

        <div>
          <label htmlFor="code">ZIP Code</label>
          <input type="email" name="code" placeholder="2000" />
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input type="text" name="city" placeholder="Casablanca" />
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <input type="text" name="country" placeholder="Morocco" />
        </div>
      </form>
    </section>
  );
}

export default Shipping;
