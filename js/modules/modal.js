import {
  isEscKey,
  initModal
} from './utils.js';

import {
  modalConfig,
} from './configs.js';

const setupCheckout = ( modal ) => {
  if ( !modal.starter || !modal.openedWindow.id === 'checkout-modal' ) return;

  const cartList = document.querySelector( '#order-list' );
  const orderFieldNode = modal.openedWindow.querySelector( '[data-order-meta]' );
  orderFieldNode.value = '';
  Array.from( cartList.children ).map( item => {
    // сюда можно вставить запрос мета информации по ID товара из БД, а код ниже удалить

    orderFieldNode.value += item.querySelector( '.cart-item__meta-title' ).textContent;
  } );

}
const updatedConfig = Object.assign( modalConfig, {
  beforeOpen: ( modal ) => {
    setupCheckout( modal );
  },
} );

const simpleModal = new HystModal( updatedConfig );

const initModals = () => {
  initModal( simpleModal );
};

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
  simpleModal,
  initModals,
  initHeaderMenu
};
