import {
  initSlider
} from './utils.js';

import {
  sliderConfig
} from './configs.js';

const initSliders = () => {
  initSlider( '#novelties-slider', sliderConfig.novelties );
  document.querySelectorAll( '.product-slider-card__slider' ).forEach( slider => {
    initSlider( slider, sliderConfig.productCard );
  } );
  initSlider( '#product-gallery .product-gallery__slider', Object.assign( sliderConfig.product, {
    thumbs: {
      swiper: initSlider( '#product-gallery .product-gallery__thumb-slider', sliderConfig.productThumbs ),
    },
  } ) );
};

export {
  initSliders,
};
