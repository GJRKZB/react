import { useState, useEffect } from "react";

export default function useTimer(totalTimeInMinutes) {
  const totalTimeInSeconds = totalTimeInMinutes * 60;
  const [seconds, setSeconds] = useState(totalTimeInSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (isRunning && seconds > 0) {
      timeoutId = setTimeout(() => {
        setSeconds((state) => state - 1);
      }, 1000);
    } else if (!isRunning) {
      clearTimeout(timeoutId);
    }

    return () => clearTimeout(timeoutId);
  }, [seconds, isRunning]);

  const start = () => {
    if (!isRunning && seconds > 0) {
      setIsRunning(true);
    }
  };

  const stop = () => {
    setIsRunning(false);
  };

  return { isRunning, start, stop, seconds };
}
