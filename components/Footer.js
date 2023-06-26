import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerlogo}>
        <Image src="/logo.png" alt="logo" width={200} height={100}/>
        <p>&copy; {new Date().getFullYear()} Rootry</p>
      </div>
      <div className={styles.footerlinks}>
        <div className={styles.footerlinkdiv}>
          <h3>About Rootry</h3>
          <a href="#">About Us</a>
          <a href="#">Terms & conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
          <a href="#">Refer a friend</a>
        </div>
        <div className={styles.footerlinkdiv}>
          <h3>Connect with us</h3>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Our blog</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
