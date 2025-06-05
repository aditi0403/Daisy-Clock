import React, { useState, useEffect } from 'react';
import Stopwatch from './Stopwatch';
import Timer from './Timer';
import Alarm from './Alarm';
import DaisySVG from './DaisySVG';
import './DaisyLayout.css';

const DaisyLayout = () => {
  const [mode, setMode] = useState('stopwatch');
  const [isHovered, setIsHovered] = useState(false);

  const renderComponent = () => {
    switch (mode) {
      case 'timer':
        return <Timer />;
      case 'alarm':
        return <Alarm />;
      default:
        return <Stopwatch />;
    }
  };

  const handlePetalClick = (id) => {
    console.log("Clicked:", id);
    if (id === 'petal-stopwatch') {
      setMode('stopwatch');
      console.log("Mode set to: stopwatch");
    } else if (id === 'petal-timer') {
      setMode('timer');
      console.log("Mode set to: timer");
    } else if (id === 'petal-alarm') {
      setMode('alarm');
      console.log("Mode set to: alarm");
    }
  };

  const handleMinimize = () => {
    if (window.electron && window.electron.ipcRenderer) {
      window.electron.ipcRenderer.send('minimize-window');
    }
  };

  const handleClose = () => {
    if (window.electron && window.electron.ipcRenderer) {
      window.electron.ipcRenderer.send('close-window');
    }
  };

  useEffect(() => {
    if (window.electron && window.electron.ipcRenderer) {
      const handleWindowBlur = () => {
        console.log("Window blurred, setting isHovered to false");
        setIsHovered(false);
      };
      window.electron.ipcRenderer.on('window-blur', handleWindowBlur);
      return () => window.electron.ipcRenderer.removeListener('window-blur', handleWindowBlur);
    }
  }, []);

  return (
    <div 
      className="daisy-wrapper relative flex items-center justify-center h-screen"
      onMouseEnter={() => {
        console.log("Mouse entered daisy-wrapper");
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        console.log("Mouse left daisy-wrapper");
        setIsHovered(false);
      }}
    >
      {/* Control Banner */}
      {isHovered && (
        <div className="banner absolute top-1 w-full flex justify-between items-center px-2 py-1 mx-2" style={{ WebkitAppRegion: 'drag' }}>
          <span className="text-xs text-black font-medium font-orbitron">Daisy Clock</span>
          <div className="flex space-x-1">
            <button 
              onClick={handleMinimize} 
              className="w-4 h-4 flex items-center justify-center bg-yellow-400 rounded-full hover:bg-yellow-500 transition-colors"
              style={{ WebkitAppRegion: 'no-drag' }}
            >
              <span className="text-xs font-bold">−</span>
            </button>
            <button 
              onClick={handleClose} 
              className="w-4 h-4 flex items-center justify-center bg-red-400 rounded-full hover:bg-red-500 transition-colors"
              style={{ WebkitAppRegion: 'no-drag' }}
            >
              <span className="text-xs font-bold">×</span>
            </button>
          </div>
        </div>
      )}
      
      {/* SVG Layer */}
      <div className="svg-layer absolute">
        <DaisySVG onPetalClick={handlePetalClick} />
      </div>
      
      {/* Center Content */}
      <div className="center-content absolute flex items-center justify-center">
        {renderComponent()}
      </div>
    </div>
  );
};

export default DaisyLayout;