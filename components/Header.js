import React from "react";
import Link from "next/link";
// css
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <img
        className={headerStyles.logo}
        src="/assets/shared/desktop/logo.svg"
        alt="audiophile-logo"
      />

      <nav>
        <ul className={headerStyles.links}>
          <Link href="/" className="link">
            HOME
          </Link>
          <Link href="/" className="link">
            HEADPHONES
          </Link>
          <Link href="/" className="link">
            SPEAKERS
          </Link>
          <Link href="/" className="link">
            EARPHONES
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
