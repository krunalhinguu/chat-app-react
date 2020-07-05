import React from "react";
import emoji from "react-emoji";
import styles from "./message.module.css";
import cx from "classnames";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className={cx(styles.messageContainer, styles.justifyEnd)}>
      <p className={cx(styles.sentText, styles.pr)}>{trimmedName}</p>
      <div className={cx(styles.messageBox, styles.backgroundBlue)}>
        <p className={cx(styles.messageText, styles.colorWhite)}>
          {emoji.emojify(text)}
        </p>
      </div>
    </div>
  ) : (
    <div className={cx(styles.messageContainer, styles.justifyStart)}>
      <div className={cx(styles.messageBox, styles.backgroundLight)}>
        <p className={cx(styles.messageText, styles.colorDark)}>
          {emoji.emojify(text)}
        </p>
      </div>
      <p className={cx(styles.sentText, styles.pl)}>{user}</p>
    </div>
  );
};

export default Message;
