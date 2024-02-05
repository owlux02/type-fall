import { useState, useEffect, useCallback } from 'react';
import { Howl } from 'howler';

import { HealthBar } from './components/Healthbar/Healthbar';
import { Letters } from './components/Letters/Letters';
import { GameOver } from './components/GameOver/GameOver';

export const Game = () => {
  const [health, setHealthAmount] = useState(100);
  const [playing, setPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    if (health <= 0) {
      setGameOver(true);
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
      {gameOver ? (
        <GameOver
          tryAgain={() => {
            setAttempts(attempts + 1);
            setHealthAmount(100);
            setGameOver(false);
          }}
        />
      ) : (
        <HealthBar health={health} />
      )}
    </>
  );
};
