import { Text } from "./Text.jsx";
import { IconAdd } from "./icons/IconAdd.jsx";
import { IconMinus } from "./icons/IconMinus.jsx";
import styles from "./Counter.module.css";
import { useState } from "react";
export const Counter = ({ name, count }) => {
  const [counterValue, setCounterValue] = useState(0);

  const handleIncrement = () => {
    setCounterValue(counterValue + 1);
  };

  const handleDecrement = () => {
    if (counterValue > 0) {
      setCounterValue(counterValue - 1);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Text>
        {counterValue} {name}
      </Text>
      <nav>
        <IconAdd onClick={handleIncrement} />
        <IconMinus onClick={handleDecrement} />
      </nav>
    </div>
  );
};
