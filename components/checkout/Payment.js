import React from "react";
import { useGlobal } from "../../context";
// icons
import { MdCreditCard, MdMoney, MdCheck } from "react-icons/md";
// css
import PaymentStyles from "../../styles/checkout/Payment.module.css";

function Payment() {
  const { payMethode, setPayMethode } = useGlobal();

  return (
    <section className={PaymentStyles.container}>
      <div>
        <h2>Payment Methode</h2>

        <div>
          <button
            className={`${
              payMethode === "e-money" && PaymentStyles.choosenMethode
            }`}
            onClick={(e) => setPayMethode("e-money")}
          >
            <MdCreditCard />
            <p>e-Money</p>
          </button>

          <button
            className={`${
              payMethode === "cash" && PaymentStyles.choosenMethode
            }`}
            onClick={() => setPayMethode("cash")}
          >
            <MdMoney />
            <p>Cash on Delivery</p>
          </button>
        </div>
      </div>

      <form
        action="POST"
        className={`${payMethode === "e-money" && PaymentStyles.showForm}`}
      >
        <div>
          <label htmlFor="e-money-number">e-Money Number</label>
          <input type="text" name="e-money number" placeholder="234567189" />
        </div>

        <div>
          <label htmlFor="pin">e-Money PIN</label>
          <input type="text" name="pin" placeholder="5784" />
        </div>
      </form>

      <button className={`${payMethode === "e-money" && PaymentStyles.slide}`}>
        <MdCheck />
        <p>CONTINUE AND PAY</p>
      </button>
    </section>
  );
}

export default Payment;
