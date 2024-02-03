import { useState, useEffect, useCallback } from 'react';
import { Howl } from 'howler';
import { useLocation } from 'wouter';

import { HealthBar } from './components/Healthbar/Healthbar';
import { Letters } from './components/Letters/Letters';

export const Game = () => {
  const [health, setHealthAmount] = useState(100);
  const [playing, setPlaying] = useState(false);
  const [, setLocation] = useLocation();
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    if (health <= 0) {
      const playAgain = window.confirm(
        'Game over, would you like to play again?'
      );

      if (playAgain) {
        setAttempts(attempts + 1);
        setHealthAmount(100);
      } else {
        setLocation('/');
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
      <Letters setHealthAmount={setHealthAmount} attempts={attempts} />
      <HealthBar health={health} />
    </>
  );
};
