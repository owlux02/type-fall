import { css } from '@linaria/core';
import { Link } from 'wouter';
import { Howler } from 'howler';
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

const starProjectButtonCSS = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`

export const Welcome = () => {
  Howler.stop();

  return (
    <div className={mainCSS}>
      <main className="container nes-container is-centered is-dark">
        <h1>Welcome to Type Fall</h1>

        <div className={actionsCSS}>
          <StartGameButton />
          <Link
            className={`nes-btn ${starProjectButtonCSS}`}
            href="https://github.com/martinval11/type-fall"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width={28}
              height={28}
              viewBox="0 0 48 48"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 4h-8v4H6v4H2v12h4v4h4v4h4v4h4v4h4v4h4v-4h4v-4h4v-4h4v-4h4v-4h4V12h-4V8h-4V4h-8v4h-4v4h-4V8h-4V4Zm0 4v4h4v4h4v-4h4V8h8v4h4v12h-4v4h-4v4h-4v4h-4v4h-4v-4h-4v-4h-4v-4h-4v-4H6V12h4V8h8Z"
                fill="currentColor"
              ></path>
            </svg>
            Star project on GitHub
          </Link>
        </div>
      </main>
    </div>
  );
};
