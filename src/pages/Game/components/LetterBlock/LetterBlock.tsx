import { useEffect, useRef } from 'preact/compat';

import { letterBoxCSS } from './styles';
import { playSoundEffect } from '../../lib/playSoundEffect';

export const LetterBlock = ({
  letter,
  duration,
  hit,
  frozen,
  isDown,
  onClick,
  health,
}: {
  letter: string;
  duration: number;
  hit: boolean;
  frozen: boolean;
  isDown: (down: number) => void;
  onClick: (event: MouseEvent) => void;
  health: number;
}) => {
  const letterBlockRef = useRef<HTMLButtonElement>(null);

  let timesDown = 0;
  const handleAnimationFrame = () => {
    const letter = letterBlockRef.current;
    const currentPosition = letter?.getBoundingClientRect();

    if (currentPosition && currentPosition.bottom >= (window.innerHeight + 10) && health > 0) {
      playSoundEffect('lost-of-life.mp3', 0.03);

      setTimeout(() => {
        letter!.style.animation = `explode linear  0.25s`;
        letter!.style.opacity = '0';
      }, 200);

      isDown(timesDown + 1);
      timesDown += 1;
    }

    requestAnimationFrame(handleAnimationFrame);
  };

  useEffect(() => {
    handleAnimationFrame();
  }, []);

  return (
    <button
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
    </button>
  );
};
