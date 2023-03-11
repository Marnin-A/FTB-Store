import React from "react";
import img1 from "../../assets/Rectangle14.png";
import img2 from "../../assets/Rectangle15.png";
import img3 from "../../assets/Rectangle16.png";
import img4 from "../../assets/Rectangle17.png";
import arrow from "../../assets/right-arrow.svg";
import styles from "./products.module.css";
export const Products = () => {
  const Images = [
    { img: img1, name: "FTB 14 Armoured BLEND" },
    { img: img2, name: "FTB 14 BLUEhorse BLEND" },
    { img: img3, name: "FTB 14 Lightsaber BLEND" },
    { img: img4, name: "FTB 14 REDBULL express" },
  ];
  return (
    <section className={styles.products}>
      <div className={styles.products_header}>
        <div>OUR Gamepad BLENDS</div>
        <div>
          View Product <img id={styles.arrow} src={arrow} alt="" />
        </div>
      </div>
      <div className={styles.items}>
        {Images.map((element) => {
          return <Card img={element.img} name={element.name} />;
        })}
      </div>
    </section>
  );
};

function Card({ img, name }) {
  return (
    <div className={styles.card}>
      <img id={styles.controller} src={img} alt="A playstation controller" />
      <span>{name}</span>
      <span>
        More Info <img id={styles.arrow} src={arrow} alt="" />
      </span>
    </div>
  );
}
