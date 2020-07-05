import React from "react";

import styles from "./input.module.css";

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        value={message}
        placeholder="Type a message...."
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button
        className={styles.sendButton}
        onClick={(event) => sendMessage(event)}
      >
        Send
      </button>
    </form>
  );
};

export default Input;
