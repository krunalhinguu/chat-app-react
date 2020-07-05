import React from "react";
import styles from "./infobar.module.css";

/* icons */
import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";

const InfoBar = ({ room }) => {
  return (
    <div className={styles.infoBar}>
      <div className={styles.leftInnerContainer}>
        <img className={styles.onlineIcon} src={onlineIcon} alt="online"></img>
        <h3>{room}</h3>
      </div>
      <div className={styles.rightInnerContainer}>
        <a href="/">
          <img src={closeIcon} alt="close" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
