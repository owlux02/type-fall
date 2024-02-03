import { css } from '@linaria/core';

export const dialogCSS = css`
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 18px;

  & div {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
  }
`;
