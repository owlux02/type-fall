import { useCallback, useEffect } from 'preact/hooks';
import { useLocation } from 'wouter';

import { dialogActionsCSS, dialogCSS, dialogContentCSS } from './styles';

export const Paused = ({
  paused,
  setPaused,
}: {
  paused: boolean;
  setPaused: (value: boolean) => void;
}) => {
  const [, setLocation] = useLocation();

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setPaused(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <dialog
      open={paused}
      className={`${dialogCSS}`}
      id="dialog-default"
    >
      <div className={`${dialogContentCSS} nes-dialog`}>
        <h1>Paused</h1>

        <div className={dialogActionsCSS}>
          <button
            className="nes-btn is-primary"
            onClick={() => setPaused(false)}
          >
            Continue Playing
          </button>
          <button className="nes-btn is-error" onClick={() => setLocation('/')}>
            Quit
          </button>
        </div>
      </div>
    </dialog>
  );
};
