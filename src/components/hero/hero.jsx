import React from "react";
import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_left}>
        <div className={styles.hero_title}>
          <span>FOR </span> <span>THE</span>
          <span>BOYS</span>
        </div>
        <div>GAMING CO .</div>
        <div>WANNA BE THE BEST? BE THE FIRST.</div>
      </div>
      <div className={styles.hero_right}>
        <div>GAMEPAD MADE WITH MILITARY PRECISION.</div>
        <div>
          We are an Badagrian, gamepad-backed business roasting delicious video
          game devices for like-minded companies.
        </div>
      </div>
    </div>
  );
};
