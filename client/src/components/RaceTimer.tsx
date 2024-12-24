import { useEffect, useState } from "react";
import formatTime from "../utils/formatTime";
import { useTypingStore } from "../stores/useTypingStore";

const RaceTimer = () => {
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time <= 0) {
      useTypingStore.getState().raceOver("timeout");
      return;
    }

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);

      if (time % 5 === 0) useTypingStore.getState().setCurrentSpeed();
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return <p>{formatTime(time)}</p>;
};

export default RaceTimer;
