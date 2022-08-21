import React from "react";
import { useRouter } from "next/router";
import { useGlobal } from "../context";

// components
import Header from "./shared/Header";
import Cart from "./shared/Cart";
import Err from "./shared/Err";

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
    <>
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
    </>
  );
};

export default Layout;
