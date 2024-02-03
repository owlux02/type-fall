import { css } from '@linaria/core';
import { Link } from 'wouter';
import { StartGameButton } from './startGameButton';

const mainCSS = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  height: 100vh;
`;

const actionsCSS = css`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const Welcome = () => {
  return (
    <div className={mainCSS}>
      <main className="container nes-container is-centered is-dark">
        <h1>Welcome to Type Fall</h1>

        <div className={actionsCSS}>
          <StartGameButton />
          <Link
            className="nes-btn"
            href="https://github.com/martinval11/type-fall"
            target="_blank"
            rel="noopener noreferrer"
          >
            Star project on GitHub
          </Link>
        </div>
      </main>
    </div>
  );
};
