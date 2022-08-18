import React from "react";
import Link from "next/link";
import { useGlobal } from "../../context";
// icons
import { MdFacebook } from "react-icons/md";
import { FaTwitter, FaInstagram } from "react-icons/fa";
// css
import footerStyles from "../../styles/shared/Footer.module.css";

function Footer() {
  const { navigateTo, currentRoute } = useGlobal();

  return (
    <footer className={footerStyles.container}>
      <div>
        <img
          className={footerStyles.logo}
          src="/assets/shared/desktop/logo.svg"
          alt="audiophile-logo"
        />

        <ul className={footerStyles.links}>
          <Link href="/">
            <a
              className={`${currentRoute === "/" && footerStyles.currentPage}`}
              onClick={() => navigateTo("/")}
            >
              HOME
            </a>
          </Link>

          <Link href="/category/headphones">
            <a
              className={`${
                currentRoute.includes("headphone") && footerStyles.currentPage
              }`}
              onClick={() => navigateTo("/category/headphones")}
            >
              HEADPHONES
            </a>
          </Link>

          <Link href="/category/speakers">
            <a
              className={`${
                currentRoute.includes("speaker") && footerStyles.currentPage
              }`}
              onClick={() => navigateTo("/category/speakers")}
            >
              SPEAKERS
            </a>
          </Link>

          <Link href="/category/earphones">
            <a
              className={`${
                currentRoute.includes("earphone") && footerStyles.currentPage
              }`}
              onClick={() => navigateTo("/category/earphones")}
            >
              EARPHONES
            </a>
          </Link>
        </ul>
      </div>

      <div>
        <p>
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we’re open 7 days a week.
        </p>
      </div>

      <div>
        <p>Copyright 2022. All Rights Reserved</p>

        <div>
          <Link href="https://www.facebook.com">
            <a target="_blank">
              <MdFacebook />
            </a>
          </Link>

          <Link href="https://twitter.com">
            <a target="_blank">
              <FaTwitter />
            </a>
          </Link>

          <Link href="https://instagram.com">
            <a target="_blank">
              <FaInstagram />
            </a>
          </Link>
        </div>
      </div>

      <div>
        <hr className={footerStyles.line} />
      </div>
    </footer>
  );
}

export default Footer;
