import React from "react";
import featuredImg from "../../assets/Rectangle12.png";
import styles from "./featured.module.css";

export const Featured = () => {
  return (
    <section className={styles.featured}>
      <div className={styles.featured_left}>
        <div>Featured</div>
        <div>FTB 14 GAMEPAD CO ENAMEL analogue with sensor</div>
        <p>
          Lightweight and durable, our Ftb 14 Gamepad Co branded Enamel Analogue
          is a must-have!
          <ul>
            <li>
              Material: Metal with an enamel layer and sublimation coating
            </li>
            <li>Dimensions: height 3.14″ (8 cm), diameter 3.25″ (8.5 cm)</li>
            <li>White coating with a silver rim</li>
            <li>
              <strong>NOT dishwasher or microwave safe</strong>
            </li>
            <li>Hand-wash only Attention!</li>
          </ul>
          <strong>Attention! </strong>Don't heat liquids or food directly in the
          mug—it can damage the coating.
        </p>
      </div>
      <div className={styles.featured_right}>
        <img
          id={styles.featured_Img}
          src={featuredImg}
          alt="A white PS5 controller in front of a white flower pot"
        />
      </div>
    </section>
  );
};
