import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// icons
import {
  MdOutlineShoppingCart,
  MdHome,
  MdHeadphones,
  MdSpeaker,
} from "react-icons/md";
import { Squash } from "hamburger-react";
// useContext
import { useGlobal } from "../../context";
// css
import headerStyles from "../../styles/shared/Header.module.css";

const Header = () => {
  const {
    navOpen,
    setNavOpen,
    setCartOpen,
    currentRoute,
    navigateTo,
    cartLength,
  } = useGlobal();

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.container}>
        <button className={headerStyles.hamburger}>
          <Squash toggled={navOpen} toggle={setNavOpen} />
        </button>

        <img
          className={headerStyles.logo}
          src="/assets/shared/desktop/logo.svg"
          alt="audiophile-logo"
        />

        <div>
          <nav className={`${navOpen ? headerStyles.showNav : ""}`}>
            <ul className={headerStyles.links}>
              <Link href="/">
                <a
                  className={`${
                    currentRoute === "/" && headerStyles.currentPage
                  }`}
                  onClick={() => navigateTo("/")}
                >
                  <p>HOME</p>
                  <MdHome />
                </a>
              </Link>

              <Link href="/category/headphones">
                <a
                  className={`${
                    currentRoute.includes("headphone") &&
                    headerStyles.currentPage
                  }`}
                  onClick={() => navigateTo("/category/headphones")}
                >
                  <p>HEADPHONES</p>
                  <MdHeadphones />
                </a>
              </Link>

              <Link href="/category/speakers">
                <a
                  className={`${
                    currentRoute.includes("speaker") && headerStyles.currentPage
                  }`}
                  onClick={() => navigateTo("/category/speakers")}
                >
                  <p>SPEAKERS</p>
                  <MdSpeaker />
                </a>
              </Link>

              <Link href="/category/earphones">
                <a
                  className={`${
                    currentRoute.includes("earphone") &&
                    headerStyles.currentPage
                  }`}
                  onClick={() => navigateTo("/category/earphones")}
                >
                  <p>EARPHONES</p>
                  <svg
                    stroke="currentColor"
                    fill="#fff"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="styles_icon__JJcF5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.432 4.432 0 0 1-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 0 1-.346.659l-.593.19a.548.548 0 0 1-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563-.43.112-.561.994-.292 1.969.269.975.836 1.675 1.266 1.563zm3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.434 4.434 0 0 0 2.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 0 0 .346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948zm.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563.43.112.561.994.292 1.969-.269.975-.836 1.675-1.266 1.563z"
                    ></path>
                  </svg>
                </a>
              </Link>
            </ul>
          </nav>

          <button
            className={headerStyles.cart}
            onClick={() => {
              setCartOpen(true);
              setNavOpen(false);
            }}
          >
            <MdOutlineShoppingCart />
            {cartLength ? (
              <div className={headerStyles.cartQuantity}>
                <motion.p key={cartLength} animate={{ scale: 1, opacity: 1 }}>
                  {cartLength}
                </motion.p>
              </div>
            ) : (
              ""
            )}
          </button>
        </div>

        <div className={headerStyles.layer}></div>
      </div>
    </header>
  );
};

export default Header;
