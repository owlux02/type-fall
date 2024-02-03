import { css } from '@linaria/core';

export const letterBoxContainerCSS = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15px;
  outline: none;
`;

export const scoreCSS = css`
  background-color: rgba(0, 0, 0, 0.5);
  text-shadow: 1px 1px 1px #000;
  padding: 4px;
  user-select: none;
  z-index: 5;
  position: absolute;
`;
