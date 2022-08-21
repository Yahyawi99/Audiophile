import React from "react";
import { useRouter } from "next/router";
import { useGlobal } from "../context";
import { motion } from "framer-motion";
// components
import Header from "./shared/Header";
import Cart from "./shared/Cart";
import Err from "./checkout/Err";

const Layout = ({ children }) => {
  const { error } = useGlobal();

  const { asPath } = useRouter();
  let checkout;

  if (asPath.includes("checkout")) {
    checkout = true;
  } else {
    checkout = false;
  }

  return (
    <motion.div
      style={{
        opacity: 0,
        transition: ".5s",
        transitionTimingFunction: "linear",
      }}
      key={asPath}
      animate={{ opacity: 1 }}
    >
      {checkout || (
        <>
          <Header />
          <Cart />
        </>
      )}

      {error && <Err />}
      <main>
        <section>{children}</section>
      </main>
    </motion.div>
  );
};

export default Layout;
