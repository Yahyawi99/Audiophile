import React from "react";
import { useGlobal } from "../../context";
// icons
import { MdCreditCard, MdMoney, MdCheck } from "react-icons/md";
// css
import PaymentStyles from "../../styles/checkout/Payment.module.css";

function Payment() {
  const {
    payMethode,
    setPayMethode,
    paymentData,
    setPaymentData,
    formSubmit,
    PaymentFormRef,
  } = useGlobal();

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
        ref={PaymentFormRef}
      >
        <div>
          <label htmlFor="e-money-number">e-Money Number</label>
          <input
            type="text"
            name="e-money number"
            placeholder="5105105105105100"
            value={paymentData.e_money_number}
            onChange={(e) => {
              const input =
                e.currentTarget.value[e.currentTarget.value.length - 1];
              const regex = /\d/g;

              if (regex.test(input) || input === undefined) {
                setPaymentData({
                  ...paymentData,
                  e_money_number: e.currentTarget.value,
                });
              }
            }}
          />
          <p>Required</p>
          <p>Wrong format</p>
        </div>

        <div>
          <label htmlFor="pin">e-Money PIN</label>
          <input
            type="text"
            name="pin"
            placeholder="5784"
            value={paymentData.e_money_pin}
            onChange={(e) => {
              const input =
                e.currentTarget.value[e.currentTarget.value.length - 1];
              const regex = /\d/g;

              if (regex.test(input) || input === undefined) {
                setPaymentData({
                  ...paymentData,
                  e_money_pin: e.currentTarget.value,
                });
              }
            }}
          />
          <p>Required</p>
          <p>Wrong format</p>
        </div>
      </form>

      <button
        className={`${payMethode === "e-money" && PaymentStyles.slide}`}
        onClick={formSubmit}
      >
        <MdCheck />
        <p>CONTINUE AND PAY</p>
      </button>
    </section>
  );
}

export default Payment;
