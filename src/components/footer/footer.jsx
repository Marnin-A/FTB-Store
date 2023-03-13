import React from "react";
import styles from "./footer.module.css";
import facebook from "../../assets/facebook.svg";
import insta from "../../assets/instagram.svg";
import tik_tok from "../../assets/Tiktok.svg";

export const Footer = () => {
  return (
    <footer>
      <div>
        <div id={styles.products_links} className={styles.ft_column}>
          <h3>PRODUCTS</h3>
          <div>
            <a href="">Gamepad</a>
            <a href="">Enamel</a>
            <a href="">Gift & Asseccories</a>
            <a href="">No one left behind</a>
          </div>
        </div>
        <div className={styles.ft_column}>
          <h3>CUSTOMER INFO</h3>
          <div>
            <a href="">My account</a>
            <a href="">Contact Us</a>
            <a href="">FAQ</a>
          </div>
        </div>
        <div className={styles.ft_column}>
          <h3>COMPANY</h3>
          <div>
            <a href="">About Us</a>
            <a href="">Shop Locations</a>
            <a href="">Wholesale Distribution</a>
          </div>
        </div>
        <div className={styles.ft_column}>
          <h3>POLICIES</h3>
          <div>
            <a href="">Shipping Policy</a>
            <a href="">Refund Policy</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
          </div>
        </div>
      </div>
      <div className={styles.sign_and_follow}>
        <div id={styles.sign_up}>
          <h3>SIGN UP FOR OUR NEWSLETTER</h3>
          <div>
            Be the first to know when we launch a new product or when we need
            your support to rally for a cause.
          </div>
          <form id={styles.sign_up_form}>
            <input
              type="email"
              pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
            />
            <button>Sign Up</button>
          </form>
        </div>
        <div id={styles.follow_us}>
          <h3>FOLOW US</h3>
          <div>
            You know the drill. Show your support by following and sharing our
            message on social media.
          </div>
          <div id={styles.socials}>
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="">
              <img src={insta} alt="" />
            </a>
            <a href="">
              <img src={tik_tok} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div id={styles.credits}>
        <div>
          &#169; Copyright{" "}
          <a href="https://twitter.com/Klonexofficial">
            &nbsp; Klonex Official &nbsp;
          </a>{" "}
          and Built by &nbsp;
          <a href="https://twitter.com/marnin_a"> Marnin_a</a>
        </div>
        <div>
          <a href="">Privacy</a>
          <a href="">Terms</a>
        </div>
      </div>
    </footer>
  );
};
