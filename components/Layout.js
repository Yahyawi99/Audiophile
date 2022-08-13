import React from "react";
// components
import Header from "./shared/Header";
import Cart from "./shared/Cart";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Cart />

      <main>{children}</main>
    </>
  );
};

export default Layout;
