import { css } from '@linaria/core';

export const letterBoxCSS = css`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-weight: bold;
  font-size: 24px;
  transition: all 0.2s;
  position: relative;
  user-select: none;
  z-index: 1;

  @keyframes down {
    0% {
      transform: translateY(-15vh);
    }

    100% {
      transform: translateY(95vh);
    }
  }

  @keyframes explode {
    0% {
      transform: scale(1);
      opacity: 1;
    }

    100% {
      transform: scale(0);
      opacity: 0;
    }
  }
`;
