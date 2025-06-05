// src/components/DaisyClock.jsx
import React from 'react';
import './daisy.css';
import PetalButton from './PetalButton';
import { FaStopwatch } from 'react-icons/fa';
import { BiSolidHourglass } from 'react-icons/bi';
import { LuAlarmClock } from 'react-icons/lu';

const DaisyClock = ({ currentTime }) => {
  return (
    <div className="daisy-container">
      <PetalButton icon={<BiSolidHourglass />} styleClass="petal petal1" label="Timer" />
      <PetalButton icon={<LuAlarmClock />} styleClass="petal petal2" label="Alarm" />
      <PetalButton icon={<FaStopwatch />} styleClass="petal petal3" label="Stopwatch" />

      <div className="daisy-center">
        <div className="clock-text">{currentTime}</div>
      </div>
    </div>
  );
};

export default DaisyClock;
