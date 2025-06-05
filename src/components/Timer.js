import React, { useEffect, useRef, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import { RiResetLeftFill } from 'react-icons/ri';

const Timer = () => {
  const [time, setTime] = useState(300);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const soundRef = useRef(null);

  // Initialize sound
  useEffect(() => {
    soundRef.current = new Audio(process.env.PUBLIC_URL + '/ding.mp3');
    return () => {
      if (soundRef.current) {
        soundRef.current.pause();
        soundRef.current = null;
      }
    };
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const startTimer = () => {
    if (isRunning) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
          if (soundRef.current) {
            soundRef.current.play().catch(console.error);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(300);
  };

  const handleChange = (e) => {
    const minutes = Number(e.target.value);
    if (minutes > 0) {
      setTime(minutes * 60);
    }
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center timer-mode">
      <div className="text-sm font-orbitron text-black font-semibold">
        {formatTime(time)}
      </div>
      <input
        type="number"
        min="1"
        max="99"
        placeholder="min"
        onChange={handleChange}
        className="timer-input"
        disabled={isRunning}
        title="Set timer in minutes"
      />
      <div className="flex space-x-1 mt-0">
        <button
          onClick={startTimer}
          className="timer-btn"
          title="Start"
        >
          <FaPlay />
        </button>
        <button
          onClick={pauseTimer}
          className="timer-btn"
          title="Pause"
        >
          <FaPause />
        </button>
        <button
          onClick={resetTimer}
          className="timer-btn"
          title="Reset"
        >
          <RiResetLeftFill />
        </button>
      </div>
    </div>
  );
};

export default Timer;