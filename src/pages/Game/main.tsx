import { HealthBar } from './components/Healthbar/Healthbar';
import { Letters } from './components/Letters/Letters';
import { useState, useEffect, useCallback } from 'react';

import { Howl } from 'howler';

export const Game = () => {
  const [health, setHealthAmount] = useState(100);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (health <= 0) {
      const playAgain = window.confirm(
        'Game over, would you like to play again?'
      );

      if (playAgain) {
        window.location.reload();
      } else {
        window.location.href = '/';
      }
    }
  }, [health]);

  const playMusic = useCallback(() => {
    const sound = new Howl({
      src: ['bgmusic.mp3'],
      volume: 0.3,
      loop: true,
    });

    sound.play();

    setPlaying(true);
  }, []);

  useEffect(() => {
    if (!playing) {
      playMusic();
    }
  }, [playMusic]);

  return (
    <>
      <Letters setHealthAmount={setHealthAmount} />
      <HealthBar health={health} />
    </>
  );
}
