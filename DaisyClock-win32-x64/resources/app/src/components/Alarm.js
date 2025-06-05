import React, { useEffect, useMemo, useState } from 'react';

const Alarm = () => {
  const [alarmTime, setAlarmTime] = useState('');
  const [triggered, setTriggered] = useState(false);

  const sound = useMemo(() => new Audio('ding.mp3'), []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentTime = now.toTimeString().slice(0, 5);
      if (alarmTime === currentTime && !triggered) {
        sound.play();
        setTriggered(true);
        alert('Your alarm is ringing');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [alarmTime, triggered, sound]);

  const handleSetAlarm = (e) => {
    setAlarmTime(e.target.value);
    setTriggered(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-sm font-orbitron text-black">{alarmTime || '--:--'}</div>
      <input
        type="time"
        onChange={handleSetAlarm}
        className="alarm-input"
      />
    </div>
  );
};

export default Alarm;