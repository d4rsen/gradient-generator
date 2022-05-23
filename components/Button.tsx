import React, { FC } from 'react';

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button: FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className="button">
      <span className="button__text-container">
        <span className="button__text">{text}</span>
      </span>
    </button>
  );
};

export default Button;
