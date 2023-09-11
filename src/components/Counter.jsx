import { Text } from "./Text.jsx";
import { IconAdd } from "./icons/IconAdd.jsx";
import { IconMinus } from "./icons/IconMinus.jsx";
import styles from "./Counter.module.css";
import { useState } from "react";
export const Counter = ({ name, count, handleIncrement, handleDecrement }) => {
  return (
    <div className={styles.wrapper}>
      <Text>
        {count} {name}
      </Text>
      <nav>
        <IconAdd onClick={handleIncrement} />
        <IconMinus onClick={handleDecrement} />
      </nav>
    </div>
  );
};
