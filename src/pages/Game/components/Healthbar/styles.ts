import { css } from '@linaria/core';

export const healthBarContainerCSS = css`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 10px;
  display: flex;
  gap: 8px;
  user-select: none;
  z-index: 5;
  background: rgba(0, 0, 0, 0.5);
`;

export const healthBarCSS = css`
  width: 100%;
  background-color: #00A900;
`;
