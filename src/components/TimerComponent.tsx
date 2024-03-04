import React, { FC, useEffect, useRef, useState } from "react";
import { Player } from "../models/Player";
import { Colors } from "../models/Colors";

interface TimerProps {
  currentPlayer: Player | null;
  startGame: () => void;
}

const TimerComponent: FC<TimerProps> = ({ currentPlayer, startGame }) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);
  const timerRef = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  function startTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    const callback =
      currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTimer
        : decrementBlackTimer;
    timerRef.current = setInterval(callback, 1000);
  }

  function decrementBlackTimer() {
    setBlackTime((prev) => prev - 1);
  }
  function decrementWhiteTimer() {
    setWhiteTime((prev) => prev - 1);
  }

  const handleRestartGame = () => {
    setWhiteTime(300);
    setBlackTime(300);
    startGame();
  };

  return (
    <div>
      <div>
        <button onClick={handleRestartGame}>Start New Game</button>
      </div>
      <h2>Black - {blackTime}</h2>
      <h2>White - {whiteTime}</h2>
    </div>
  );
};

export default TimerComponent;
