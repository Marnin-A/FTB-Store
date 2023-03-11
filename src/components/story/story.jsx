import React from "react";
import styles from "./story.module.css";
import background from "../../assets/2nd-bckgrnd.png";

export const Story = () => {
  return (
    <div className={styles.story}>
      <div className={styles.text}>
        <div>HELPING GAMERS MOVE FORWARD</div>
        <div>
          Ftb 14 Gamepad Company's beginnings are founded in the history of the
          2nd/14th Light Horse Regiment (Queensland Mounted Infantry). We are a
          proud Badagrian small business, serving local communities and giving
          back to support Badagrian committed gamers and their families.
        </div>
        <button>Read our Story</button>
      </div>
      <img
        id={styles.bg_img}
        src={background}
        alt="A game room with call of duty playing in the background"
      />
    </div>
  );
};
