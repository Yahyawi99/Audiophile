import React from "react";
import Link from "next/link";
import { useGlobal } from "../../context";
// css
import MessageStyles from "../../styles/checkout/Message.module.css";

function Message() {
  const { backHome } = useGlobal();

  return (
    <section className={MessageStyles.container}>
      <div>
        <h2>Thanks For Your Purchase</h2>

        <p>
          Hey test <span>Yassin</span> ! Your order has been submitted
          successfully. To keep track of your order, follow the instruction
          which has been sent to <span> test@test.com</span>
        </p>

        <Link href="/">
          <button onClick={backHome}>RETURN TO THE HOMEPAGE</button>
        </Link>
      </div>
    </section>
  );
}

export default Message;
