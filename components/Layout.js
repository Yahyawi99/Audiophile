import React from "react";
// components
import Header from "./Header";
import Cart from "./Cart";

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
