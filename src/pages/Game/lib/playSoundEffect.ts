import { Howl } from 'howler';

export const playSoundEffect = (soundEffectName: string, volume: number) => {
  const sound = new Howl({
    src: [soundEffectName],
    volume: volume,
  });

  return sound.play();
};
