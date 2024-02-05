import { useLocation } from 'wouter';

import { dialogActionsCSS, dialogCSS, dialogContentCSS } from './styles';

export const GameOver = ({ tryAgain }: { tryAgain: () => void }) => {
  const [, setLocation] = useLocation();

  return (
    <>
      <dialog className={`${dialogCSS}`} id="dialog-default">
        <div className={`${dialogContentCSS} nes-dialog`}>
          <h1>Game Over</h1>

          <div className={dialogActionsCSS}>
            <button className="nes-btn is-primary" onClick={() => tryAgain()}>
              Try again
            </button>
            <button
              className="nes-btn is-error"
              onClick={() => setLocation('/')}
            >
              Quit
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};
