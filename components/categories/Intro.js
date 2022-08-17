import React from "react";
// css
import introStyles from "../../styles/categories/Intro.module.css";

function Intro({ category }) {
  return (
    <section className={introStyles.container}>
      <h1>{category && category.toLocaleUpperCase()}</h1>
    </section>
  );
}

export default Intro;
