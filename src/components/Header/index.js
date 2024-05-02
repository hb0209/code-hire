import React from "react";
import styles from "./styles.module.scss";
import codingHire from "../../resources/codingHire.png";

export default function Header() {
  return (
    <div className={styles.headerWrap}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.rightHeader}>
            <div className={styles.companyLogo}>
              <img src={codingHire}></img>
              <span>Catch My Contact</span>
            </div>
            <div className={styles.industriesFilter}>Field</div>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.contactUs}>Contact Us</div>
          </div>
          <div className={styles.headerSearch}>
            <input placeholder="Search Here" type="text"></input>
          </div>
          <div className={styles.leftHeader}>
            <div className={styles.logIn}>Log In</div>
            <div className={styles.signUp}>Sign Up</div>
          </div>
        </div>
      </div>
    </div>
  );
}
