import { css } from '@linaria/core';

export const containerCSS = css`
  min-height: 100vh;
  overflow: hidden;
`

export const letterBoxContainerCSS = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15px;
  outline: none;
`;

export const scoreCSS = css`
  background: rgba(0, 0, 0, 0.6);
  text-shadow: 1px 1px 1px #000;
  padding: 4px;
  user-select: none;
  z-index: 5;
  box-shadow: inset -2px -2px #999;
`;

export const dataActionsCSS = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
