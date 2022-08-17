import React from "react";
import Link from "next/link";
// css
import latestStyles from "../../styles/home/Latest.module.css";

const Latest = () => {
  return (
    <section className={latestStyles.container}>
      <div>
        <img alt="ZX9 SPEAKER" />

        <div>
          <span>
            <h2>ZX9</h2>
            <h2>SPEAKER</h2>
          </span>

          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>

          <Link href="/product/zx9-speaker">
            <button>SEE PRODUCT</button>
          </Link>
        </div>
      </div>

      <div>
        <h2>ZX7 SPEAKER</h2>

        <Link href="/product/zx7-speaker">
          <button>SEE PRODUCT</button>
        </Link>
      </div>

      <div>
        <div></div>

        <div>
          <h2>YX1 EARPHONES</h2>

          <Link href="/product/yx1-earphones">
            <button>SEE PRODUCT</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Latest;
