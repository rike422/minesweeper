"use strict";
import './setup/_bootstrap';
import debug from './utils/debug';
import './app.css';
import { MinesweepContexts } from 'contexts/minesweep-contexts';
let dd = debug('mainApp');

window.addEventListener('DOMContentLoaded', () => {
  let router = new Arda.Router(Arda.DefaultLayout, document.getElementById("react-root"));
  router.pushContext(MinesweepContexts, {});
})
