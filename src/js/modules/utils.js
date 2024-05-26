import {
  sliderConfig
} from './configs.js';

const iosChecker = () => {
  return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes( navigator.platform )
    // iPad on iOS 13 detection
    ||
    ( navigator.userAgent.includes( 'Mac' ) && 'ontouchend' in document );
};

const iosVhFix = () => {
  if ( !( !!window.MSInputMethodContext && !!document.documentMode ) ) {
    if ( iosChecker() ) {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty( '--vh', `${vh}px` );

      window.addEventListener( 'resize', function() {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty( '--vh', `${vh}px` );
      } );
    }
  }
};

const isEscKey = ( evt ) => evt.key === 'Escape';


const initSlider = ( name, options = {} ) => {
  const defaultConfig = Object.assign( {}, sliderConfig.default );
  const customConfig = Object.assign( defaultConfig, options );

  if ( typeof name === 'string' ) {
    const sliderElement = document.querySelector( name );

    if ( !sliderElement ) return;
    return new Swiper( sliderElement, customConfig );
  }

  return new Swiper( name, customConfig );
};

const initTabs = ( name ) => {
  const tabsElement = document.querySelector( `[data-jtabs="${name}"]` );
  if ( !tabsElement || !name ) return;

  return new JustTabs( name );
};

const initModal = ( name, handler = 'data-hystmodal' ) => {
  name.config.linkAttributeName = handler;
  name.init();
};

export {
  iosVhFix,
  isEscKey,
  initSlider,
  initModal,
  initTabs
};
