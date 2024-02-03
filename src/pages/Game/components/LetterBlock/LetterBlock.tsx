import { useEffect, useRef } from 'preact/compat';

import { letterBoxCSS } from './styles';
import { playSoundEffect } from '../../lib/playSoundEffect';

export const LetterBlock = ({
  letter,
  duration,
  hit,
  setHealth,
  frozen,
  onClick,
}: {
  letter: string;
  duration: number;
  hit: boolean;
  setHealth: (health: number) => void;
  frozen: boolean;
  onClick: (event: MouseEvent) => void;
}) => {
  const letterBlockRef = useRef<HTMLDivElement>(null);

  let health = 100;

  const handleAnimationFrame = () => {
    const letter = letterBlockRef.current;

    if (letter) {
      const currentPosition = letter.getBoundingClientRect();

      if (currentPosition.bottom > 600 && health > 0) {
        health -= 2;
        playSoundEffect('lost-of-life.mp3', 0.03);

        setHealth(health);
      }
    }

    requestAnimationFrame(handleAnimationFrame);
  };

  useEffect(() => {
    handleAnimationFrame();
  }, []);

  return (
    <div
      onClick={onClick}
      ref={letterBlockRef}
      id={letter}
      className={frozen ? '' : `nes-btn ${letterBoxCSS}`}
      style={{
        animation: `down linear infinite`,
        animationName: hit ? 'explode' : 'down',
        animationDuration: hit
          ? '0.25s'
          : `${frozen ? 999999999999 : duration}s`,
        animationFillMode: 'forwards',
        animationIterationCount: '1',
        opacity: hit ? 0 : 1,
      }}
    >
      {letter}
    </div>
  );
};
