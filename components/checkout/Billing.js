import React from "react";
// css
import BillingStyles from "../../styles/checkout/Billing.module.css";

function Billing() {
  return (
    <section className={BillingStyles.container}>
      <h2>BILLING DETAILS</h2>

      <form action="POST">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Yassin Yahyawi" />
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" placeholder="user@mail.com" />
        </div>

        <div>
          <label htmlFor="number">Phone Number</label>
          <input type="text" name="number" placeholder="123-456-789" />
        </div>
      </form>
    </section>
  );
}

export default Billing;
