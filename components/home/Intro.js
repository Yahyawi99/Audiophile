import React from "react";
import Link from "next/link";
// css
import introStyles from "../../styles/home/Intro.module.css";

function Intro() {
  return (
    <>
      <section className={introStyles.intro}>
        <div className={introStyles.introTxt}>
          <h5>NEW PRODUCT</h5>

          <div>
            <h2>XX99 Mark II</h2>
            <h2>HeadphoneS</h2>
          </div>

          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <Link href="/product/xx99-mark-two-headphones">
            <button>SEE PRODUCT</button>
          </Link>
        </div>

        <div className={introStyles.introImage}>
          <img src="/assets/home/desktop/image-headset.png" alt="Headset" />
        </div>
      </section>

      <div className={introStyles.background}></div>
    </>
  );
}

export default Intro;
