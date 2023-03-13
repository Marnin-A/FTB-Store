import React from "react";
import Logo from "../../assets/large-logo.png";
import styles from "./banner.module.css";
// Redo component
export const Banner = () => {
  return (
    <div className={styles.banner}>
      <img id={styles.logoImg} src={Logo} alt="For the boys logo" />
      <div className={styles.ftbTitle}>
        <span>FOR</span>
        <span>THE</span>
        <span>BOYS</span>
      </div>
      <div>Gaming CO.</div>
      <div>WANNA BE THE BEST? BE THE FIRST.</div>
    </div>
  );
};
