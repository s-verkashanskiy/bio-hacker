import React from 'react';

function ColoredLine({ color }) {
  return (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 0.1,
      }}
    />
  );
}

export default ColoredLine;
