import {
  iosVhFix,
} from './modules/utils.js';

import {
  initHeaderMenu
} from './modules/modal.js';

import {
  initSliders,
} from './modules/slider.js';

import {
  initScrollTop,
} from './modules/scroll-top.js';

import {
  initGalleries,
} from './modules/galleries.js';

document.addEventListener( 'DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener( 'load', () => {
    initHeaderMenu();
    initSliders();
    initScrollTop();
    initGalleries();
  } );
} );
