import {
  isEscKey
} from './utils.js';


const initHeaderMenu = () => {
  try {
    const headerBurgerNode = document.querySelector( '.header-burger' );
    const headerModalNode = document.querySelector( '.header-modal' );
    const headerModalCloseNode = headerModalNode.querySelector( '.header-modal__close' );

    const closeModal = () => {
      document.documentElement.classList.remove( 'is-block-scroll' );
      headerModalNode.setAttribute( 'aria-hidden', 'true' );
      headerModalCloseNode.removeEventListener( 'click', onCloseClick );
      headerBurgerNode.addEventListener( 'click', onBurgerClick );
      document.removeEventListener( 'keydown', onEscClick );
    }

    function onBurgerClick() {
      document.documentElement.classList.add( 'is-block-scroll' );
      headerModalNode.setAttribute( 'aria-hidden', 'false' );
      headerModalCloseNode.addEventListener( 'click', onCloseClick );
      headerBurgerNode.removeEventListener( 'click', onBurgerClick );
      document.addEventListener( 'keydown', onEscClick );
    }

    function onCloseClick() {
      closeModal();
    }

    function onEscClick( evt ) {
      if ( isEscKey( evt ) ) {
        closeModal();
      }
    }

    headerBurgerNode.addEventListener( 'click', onBurgerClick );
    headerModalCloseNode.addEventListener( 'click', onCloseClick );

  } catch {
    return;
  }
}

export {
  initHeaderMenu
};
