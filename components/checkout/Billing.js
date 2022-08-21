import React from "react";
import { useGlobal } from "../../context";
// css
import BillingStyles from "../../styles/checkout/Billing.module.css";

function Billing() {
  const { billingData, setBillingData, BillingFormRef } = useGlobal();

  return (
    <section className={BillingStyles.container}>
      <h2>BILLING DETAILS</h2>

      <form action="POST" ref={BillingFormRef}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Yassin Yahyawi"
            value={billingData.name}
            onChange={(e) =>
              setBillingData({ ...billingData, name: e.currentTarget.value })
            }
          />
          <p>Required</p>
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="user@mail.com"
            value={billingData.email}
            onChange={(e) =>
              setBillingData({ ...billingData, email: e.currentTarget.value })
            }
          />
          <p>Required</p>
          <p>Wrong format</p>
        </div>

        <div>
          <label htmlFor="number">Phone Number</label>
          <input
            type="text"
            name="number"
            placeholder="123-456-789"
            value={billingData.phone}
            onChange={(e) => {
              const input =
                e.currentTarget.value[e.currentTarget.value.length - 1];
              const regex = /\d/g;

              if (regex.test(input) || input === undefined) {
                setBillingData({
                  ...billingData,
                  phone: e.currentTarget.value,
                });
              }
            }}
          />

          <p>Required</p>
          <p>Wrong format</p>
        </div>
      </form>
    </section>
  );
}

export default Billing;
