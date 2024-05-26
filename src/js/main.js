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
  initAllTabs,
} from './modules/tabs.js';

import {
  initModals,
} from './modules/modal.js';

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
    initModals();
    initAllTabs();
    initScrollTop();
    initGalleries();
  } );
} );
