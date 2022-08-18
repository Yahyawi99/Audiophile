import React from "react";
import { useRouter } from "next/router";
// components
import Header from "./shared/Header";
import Cart from "./shared/Cart";

const Layout = ({ children }) => {
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
      <main>
        <section>{children}</section>
      </main>
    </>
  );
};

export default Layout;
