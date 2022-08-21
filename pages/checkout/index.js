import React from "react";
import { useGlobal } from "../../context";
import Head from "next/head";
// icons
import { MdArrowBack } from "react-icons/md";
// components
import Summary from "../../components/checkout/Summary";
import Billing from "../../components/checkout/Billing";
import Shipping from "../../components/checkout/Shipping";
import Payment from "../../components/checkout/Payment";
import Message from "../../components/checkout/Message";
// css
import CheckoutStyles from "../../styles/checkout/Checkout.module.css";

function Index() {
  const { purshaseCompleted } = useGlobal();

  if (purshaseCompleted) {
    return <Message />;
  } else {
    return (
      <>
        <Head>
          <title>AudioPhile | Checkout</title>
        </Head>
        <section className={CheckoutStyles.container}>
          <div>
            <button onClick={() => window.history.back()}>
              <MdArrowBack />

              <p>BACK TO THE SHOP</p>
            </button>
          </div>

          <div>
            <div className={CheckoutStyles.details}>
              <Billing />

              <Shipping />

              <Payment />
            </div>

            <Summary />
          </div>
        </section>
      </>
    );
  }
}

export default Index;
