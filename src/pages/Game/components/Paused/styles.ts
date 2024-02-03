import { css } from '@linaria/core';

export const dialogCSS = css`
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const dialogContentCSS = css`
  text-align: center; 
  gap: 12px;
  background: #212529;
  color: #fff;
  border: 4px solid #fff;
`;

export const dialogActionsCSS = css`
  display: flex;
  flex-direction: column;
`
export const pauseBtnCSS = css`
  background: rgba(0, 0, 0, 0.6);
  text-shadow: 1px 1px 1px #000;
  color: #fff;
  outline: none;
  border: none;
  box-shadow: inset 2px -2px #999;
  z-index: 5;
  padding: 4px;
`
