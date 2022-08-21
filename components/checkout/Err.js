import React from "react";
import { useGlobal } from "../../context";
import { motion } from "framer-motion";
// css
import ErrStyles from "../../styles/checkout/Err.module.css";

function Err() {
  const { error } = useGlobal();

  return (
    <motion.section
      key={error === true}
      animate={{
        translateY: 25,
        opacity: 1,
      }}
      className={`${ErrStyles.container} ${error ? ErrStyles.showMessage : ""}`}
    >
      <h2>Check For Errors</h2>
    </motion.section>
  );
}

export default Err;
