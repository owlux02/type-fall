import { render } from 'preact'
import { Route } from 'wouter';

import { Welcome } from './app.tsx';
import { Game } from './pages/Game/main.tsx';

import './index.css';

render( 
  <>
    <Route path="/" component={Welcome} />
    <Route path="/game" component={Game} />
  </>,
  document.getElementById('app')!
);
