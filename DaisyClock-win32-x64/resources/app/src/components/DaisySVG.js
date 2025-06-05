import React, { useState } from 'react';
import { FaStopwatch } from 'react-icons/fa';
import { BiSolidHourglass } from 'react-icons/bi';
import { LuAlarmClock } from 'react-icons/lu';

const DaisySVG = ({ onPetalClick }) => {
  const [hoveredPetal, setHoveredPetal] = useState(null);

  const petalIcons = {
    'petal-stopwatch': { 
      icon: <FaStopwatch size={18} />, 
      x: 2900, 
      y: 1200, 
      label: 'Stopwatch',
      scaledX: 148,
      scaledY: 61
    },
    'petal-alarm': { 
      icon: <LuAlarmClock size={18} />, 
      x: 1800, 
      y: 900, 
      label: 'Alarm',
      scaledX: 92,
      scaledY: 46
    },
    'petal-timer': { 
      icon: <BiSolidHourglass size={18} />, 
      x: 900, 
      y: 1550, 
      label: 'Timer',
      scaledX: 46,
      scaledY: 79
    },
  };

  const handlePetalClick = (petalId, event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(`Petal clicked: ${petalId}`);
    if (onPetalClick) {
      onPetalClick(petalId);
    }
  };

  const handlePetalHover = (petalId) => {
    console.log(`Hovered: ${petalId}`);
    setHoveredPetal(petalId);
  };

  const handlePetalLeave = () => {
    console.log('Left petal');
    setHoveredPetal(null);
  };

  return (
    <div style={{ position: 'relative', width: '192px', height: '192px', zIndex: 5 }}>
      <svg
        width="192"
        height="192"
        viewBox="0 0 3732 3785"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 5 }}
      >
        <g id="DaisySVG">
          {/* Transparent rect to ensure SVG captures events */}
          <rect
            x="0"
            y="0"
            width="3732"
            height="3785"
            fill="transparent"
            style={{ pointerEvents: 'none' }}
          />
          {/* Non-interactive petals */}
          <path
            id="petal"
            d="M1471.93 1949.86C-180.323 2671.93 773.532 4319.19 1878.77 2339.14L1471.93 1949.86Z"
            fill="#C3B9DC"
            style={{ pointerEvents: 'none' }}
          />
          <path
            id="petal_2"
            d="M1842.21 2278.8C1235.18 4083.13 3088.18 4286.29 2408.48 2231.86L1842.21 2278.8Z"
            fill="#C3B9DC"
            style={{ pointerEvents: 'none' }}
          />
          <path
            id="petal_3"
            d="M2235.63 2324.8C3451.83 3596.56 4645.34 1993.51 2474.31 1907.05L2235.63 2324.8Z"
            fill="#C3B9DC"
            stroke="#C3B9DC"
            style={{ pointerEvents: 'none' }}
          />
          
          {/* Interactive petals */}
          <path
            id="petal-timer"
            d="M1322.79 2089.05C-434.642 2106.82 -4.04786 -8.76457 1575.69 1486.48L1322.79 2089.05Z"
            fill={hoveredPetal === 'petal-timer' ? '#B8A9D9' : '#C3B9DC'}
            onClick={(e) => handlePetalClick('petal-timer', e)}
            onMouseEnter={() => handlePetalHover('petal-timer')}
            onMouseLeave={handlePetalLeave}
            style={{ 
              cursor: 'pointer', 
              pointerEvents: 'auto',
              transition: 'fill 0.2s ease',
              zIndex: 25
            }}
          />
          <path
            id="petal-stopwatch"
            d="M2170.08 1485.65C3032.46 -210.996 4486.31 1096 2545.83 2045.5L2170.08 1485.65Z"
            fill={hoveredPetal === 'petal-stopwatch' ? '#B8A9D9' : '#C3B9DC'}
            onClick={(e) => handlePetalClick('petal-stopwatch', e)}
            onMouseEnter={() => handlePetalHover('petal-stopwatch')}
            onMouseLeave={handlePetalLeave}
            style={{ 
              cursor: 'pointer', 
              pointerEvents: 'auto',
              transition: 'fill 0.2s ease',
              zIndex: 25
            }}
          />
          <path
            id="petal-alarm"
            d="M1453.59 1505.93C913.006 -240.527 2420.15 -614.633 2215.13 1496.6L1453.59 1505.93Z"
            fill={hoveredPetal === 'petal-alarm' ? '#B8A9D9' : '#C3B9DC'}
            onClick={(e) => handlePetalClick('petal-alarm', e)}
            onMouseEnter={() => handlePetalHover('petal-alarm')}
            onMouseLeave={handlePetalLeave}
            style={{ 
              cursor: 'pointer', 
              pointerEvents: 'auto',
              transition: 'fill 0.2s ease',
              zIndex: 25
            }}
          />
          
          {/* Center circle */}
          <path
            id="center"
            d="M2677.33 1971.07C2677.33 2360.55 2522.79 2449.43 2086.21 2449.43C1649.63 2449.43 1275.33 2360.55 1275.33 1971.07C1275.33 1581.6 1555.59 1406.43 1992.17 1406.43C2428.76 1406.43 2677.33 1581.6 2677.33 1971.07Z"
            fill="#FCE15D"
            style={{ pointerEvents: 'auto', cursor: 'default', zIndex: 2 }}
          />
        </g>
      </svg>
      
      {/* Icons positioned absolutely over the SVG */}
      {Object.entries(petalIcons).map(([id, { icon, scaledX, scaledY }]) => (
        <div
          key={id}
          onClick={(e) => handlePetalClick(id, e)}
          onMouseEnter={() => handlePetalHover(id)}
          onMouseLeave={handlePetalLeave}
          style={{
            position: 'absolute',
            left: `${scaledX - 9}px`,
            top: `${scaledY - 9}px`,
            width: '18px',
            height: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000',
            pointerEvents: 'auto',
            cursor: 'pointer',
            zIndex: 30
          }}
        >
          {icon}
        </div>
      ))}
      
      {hoveredPetal && petalIcons[hoveredPetal] && (
        <div
          style={{
            position: 'absolute',
            left: `${petalIcons[hoveredPetal].scaledX - 30}px`,
            top: `${petalIcons[hoveredPetal].scaledY + 25}px`,
            backgroundColor: 'rgba(51, 51, 51, 0.9)',
            color: '#fff',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '10px',
            fontWeight: '500',
            whiteSpace: 'nowrap',
            zIndex: 35,
            pointerEvents: 'none',
            boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
            fontFamily: 'Orbitron, monospace'
          }}
        >
          {petalIcons[hoveredPetal].label}
        </div>
      )}
    </div>
  );
};

export default DaisySVG;