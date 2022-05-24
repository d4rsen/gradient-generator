import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Background from '../components/Background';
import Button from '../components/Button';
import { getRandomDirection, randomColorGenerator } from '../utils/utils';

const Home: NextPage = () => {
  const [color, setColor] = useState<string>('');
  const [color2, setColor2] = useState<string>('');
  const [direction, setDirection] = useState<string>('');
  const [text, setText] = useState<string>('Copy to clipboard');

  useEffect((): void => {
    setColor(randomColorGenerator());
    setColor2(randomColorGenerator());
    setDirection(getRandomDirection());
  }, []);

  const colorHandler = (): void => {
    setColor(randomColorGenerator());
    setColor2(randomColorGenerator());
    setDirection(getRandomDirection());
  };

  const copyHandler = async () => {
    await navigator.clipboard.writeText(
      `background: linear-gradient(${direction}, ${color}, ${color2});`,
    );
    setText('Copied!');
    setTimeout(() => setText('Copy to clipboard'), 1000);
  };

  return (
    <div className="wrapper">
      <Background direction={direction} color={color} color2={color2} />
      <Button onClick={colorHandler} text={'Change colors'} />
      <Button onClick={copyHandler} text={text} />
      <span className="colors">
        background: linear-gradient({direction}, {color}, {color2})
      </span>
    </div>
  );
};

export default Home;
