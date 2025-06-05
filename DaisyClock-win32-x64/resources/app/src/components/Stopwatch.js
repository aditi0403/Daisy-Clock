import React, { useEffect, useRef, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import { RiResetLeftFill } from 'react-icons/ri';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    if (h > 0) {
      return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };


  const startTimer = () => {
    if (isRunning) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
        <div className="font-orbitron text-black font-semibold" style={{ fontSize: time >= 3600 ? '12px' : '14px' }} >
          {formatTime(time)}
        </div>

      <div className="flex space-x-1 mt-0">
        <button
          onClick={startTimer}
          className="stopwatch-btn"
          title="Start"
        >
          <FaPlay size={8}/>
        </button>
        <button
          onClick={pauseTimer}
          className="stopwatch-btn"
          title="Pause"
        >
          <FaPause />
        </button>
        <button
          onClick={resetTimer}
          className="stopwatch-btn"
          title="Reset"
        >
          <RiResetLeftFill />
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;