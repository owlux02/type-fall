import { css } from '@linaria/core';
import { Howler } from 'howler';

import { StartGameButton } from './startGameButton';

const mainCSS = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;
`;

const actionsCSS = css`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const starProjectButtonCSS = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

export const Welcome = () => {
  Howler.stop();

  return (
    <div className={mainCSS}>
      <main className="container nes-container is-centered is-dark">
        <h1>Welcome to Type Fall</h1>

        <div className={actionsCSS}>
          <StartGameButton />
          <a
            className={`nes-btn ${starProjectButtonCSS}`}
            href="https://github.com/martinval11/type-fall"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="nes-icon github"></i>
            Star project on GitHub
          </a>
        </div>
      </main>
    </div>
  );
};
