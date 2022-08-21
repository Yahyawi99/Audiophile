import React from "react";
import { useGlobal } from "../../context";
// css
import ErrStyles from "../../styles/shared/Err.module.css";

function Err() {
  const { error } = useGlobal();

  return (
    <section
      className={`${ErrStyles.container} ${error ? ErrStyles.showMessage : ""}`}
    >
      <h2>Check For Errors</h2>
    </section>
  );
}

export default Err;
