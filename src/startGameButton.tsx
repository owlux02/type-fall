import { useEffect } from 'preact/hooks';
import { Link } from 'wouter';

export const StartGameButton = () => {
  // Prefech on hover
  useEffect(() => {
    const handleMouseEnter = () => {
      const files = ['/bgmusic.mp3', '/hit.mp3', '/lost-of-life.mp3'];

      files.forEach((file) => {
        const prefetchLink = document.createElement('link');
        prefetchLink.href = file;
        prefetchLink.rel = 'prefetch';
        document.head.appendChild(prefetchLink);
      });
    };

    const startGameButton = document.getElementById('startGameButton');
    startGameButton?.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      startGameButton?.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);
  return (
    <Link className="nes-btn is-primary" href="/game" id="startGameButton">
      Start game
    </Link>
  );
};
