
import React from 'react';

function Progressbar({ completed }) {
  return (
    <div className="h-5 w-full bg-gray-300 rounded-full my-12">
      <div
        className="h-full bg-green-500 rounded-full text-right transition-all duration-300 
        ease-in-out"
        style={{ width: `${completed}%` }}
      >
        <span className="text-white font-bold text-xs pr-2">{`${completed}%`}</span>
      </div>
    </div>
  );
}

export default Progressbar;