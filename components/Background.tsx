import React, { FC } from 'react';

interface BackgroundProps {
  direction: string;
  color: string;
  color2: string;
}

const Background: FC<BackgroundProps> = ({ direction, color, color2 }) => {
  return (
    <div
      className="background"
      style={{
        background: `linear-gradient(${direction}, ${color}, ${color2})`,
      }}
    />
  );
};

export default Background;
