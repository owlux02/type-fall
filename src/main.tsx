import { render } from 'preact'
import { Route } from 'wouter';

import { Welcome } from './app.tsx';
import { Game } from './pages/Game/main.tsx';

import { registerSW } from 'virtual:pwa-register';

import './css/index.css';

// add this to prompt for a refresh
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New content available. Reload?")) {
      updateSW(true);
    }
  },
});


render(
  <>
    <Route path="/" component={Welcome} />
    <Route path="/game" component={Game} />
  </>,
  document.getElementById('app')!
);
