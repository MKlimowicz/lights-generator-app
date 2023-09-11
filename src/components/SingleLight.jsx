import { useState } from "react";
import LightTurnedOff from "/public/images/light-turned-off.svg";
import LightBlue from "/public/images/light-blue.svg";
import LightGreen from "/public/images/light-green.svg";
import LightPink from "/public/images/light-pink.svg";
import LightYellow from "/public/images/light-yellow.svg";
import LightRed from "/public/images/light-red.svg";
import LightOrange from "/public/images/light-orange.svg";

const lights = [
  LightBlue,
  LightGreen,
  LightPink,
  LightYellow,
  LightRed,
  LightOrange,
];
export const SingleLight = (props) => {
  const [isOn, setOn] = useState(true);

  const handleToggle = () => {
    setOn(!isOn);
  };

  const getRandomIndex = () => {
    return Math.floor(Math.random() * lights.length);
  };

  const imageSrc = isOn ? lights[getRandomIndex()] : LightTurnedOff;

  return <img onClick={handleToggle} src={imageSrc} alt={"Single Light"} />;
};
