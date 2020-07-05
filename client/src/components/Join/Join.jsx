import React, { useState } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

import styles from "./join.module.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className={styles.joinOuterContainer}>
      <div className={styles.joinInnerContainer}>
        <h1 className={styles.heading}>Join</h1>
        <div>
          <input
            placeholder="Name"
            className={styles.joinInput}
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className={cx(styles.joinInput, styles.margin20)}
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) => (!name && !room ? event.preventDefault : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={cx(styles.margin20, styles.button)} type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
