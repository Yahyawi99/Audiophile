import React from "react";
import { useGlobal } from "../../context";
// css
import ShippingStyles from "../../styles/checkout/Shipping.module.css";

function Shipping() {
  const { shippingData, setShippingData, ShippingFormRef } = useGlobal();

  return (
    <section className={ShippingStyles.container}>
      <h2>SHIPPING INFO</h2>

      <form action="POST" ref={ShippingFormRef}>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            placeholder="DOUAR EL ATIKIEEN BLOC 02 NR 16"
            value={shippingData.address}
            onChange={(e) =>
              setShippingData({
                ...shippingData,
                address: e.currentTarget.value,
              })
            }
          />
          <p>Required</p>
          <p>Too short</p>
        </div>

        <div>
          <label htmlFor="code">ZIP Code</label>
          <input
            type="email"
            name="code"
            placeholder="20001"
            value={shippingData.zip_code}
            onChange={(e) => {
              const input =
                e.currentTarget.value[e.currentTarget.value.length - 1];
              const regex = /\d/g;

              if (regex.test(input) || input === undefined) {
                setShippingData({
                  ...shippingData,
                  zip_code: e.currentTarget.value,
                });
              }
            }}
          />
          <p>Required</p>
          <p>Wrong format</p>
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            placeholder="Casablanca"
            value={shippingData.city}
            onChange={(e) =>
              setShippingData({
                ...shippingData,
                city: e.currentTarget.value,
              })
            }
          />
          <p>Required</p>
          <p>Too short</p>
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            placeholder="Morocco"
            value={shippingData.country}
            onChange={(e) =>
              setShippingData({
                ...shippingData,
                country: e.currentTarget.value,
              })
            }
          />
          <p>Required</p>
          <p>Too short</p>
        </div>
      </form>
    </section>
  );
}

export default Shipping;
