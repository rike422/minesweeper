"use strict";
import './setup/_bootstrap';
import debug from './utils/debug';
import './app.css';
let dd = debug('mainApp');
import { MinesweepContexts } from 'contexts/minesweep-contexts';

window.addEventListener('DOMContentLoaded', () => {
  window.Router = new Arda.Router(Arda.DefaultLayout, document.getElementById("react-root"));
  Router.pushContext(MinesweepContexts, {});
})
