import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <img
        src="https://internal.talash.net/inthub/public/images/int25yearslogo.jpg"
        alt="ICICI LOGO"
      />
    </div>
  );
};
