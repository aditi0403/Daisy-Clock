import React from 'react';

const PetalButton = ({ icon, onClick, position }) => {
  const positions = {
    top: 'top-0 left-1/2 transform -translate-x-1/2',
    left: 'left-0 top-1/2 transform -translate-y-1/2',
    right: 'right-0 top-1/2 transform -translate-y-1/2',
  };

  return (
    <button
      onClick={onClick}
      className={`absolute w-20 h-20 bg-lilac rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-all duration-300 ${positions[position]}`}
    >
      {icon}
    </button>
  );
};

export default PetalButton;
