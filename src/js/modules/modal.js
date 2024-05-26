import {
  isEscKey,
  initModal
} from './utils.js';

import {
  modalConfig,
} from './configs.js';


const setupCheckout = ( modal ) => {
  if ( !modal.starter || modal.openedWindow.id !== 'checkout-modal' ) return;

  const cartList = document.querySelector( '#order-list' );
  const orderFieldNode = modal.openedWindow.querySelector( '[data-order-meta]' );
  orderFieldNode.value = '';
  Array.from( cartList.children ).map( item => {
    // сюда можно вставить запрос мета информации по ID товара из БД, а код ниже удалить

    orderFieldNode.value += item.querySelector( '.cart-item__meta-title' ).textContent;
  } );
};

const setupTextFieldModal = ( modal ) => {
  if ( !modal.starter || modal.openedWindow.id !== 'text-field-modal' ) return;

  const titleModal = modal.openedWindow.querySelector( '.modal__title' );
  const fieldID = modal.openedWindow.querySelector( '[name="id"]' );
  const fieldTitle = modal.openedWindow.querySelector( '[name="title"]' );
  const fieldMeta = modal.openedWindow.querySelector( '[name="meta"]' );
  titleModal.textContent = '';
  fieldID.value = '';
  fieldTitle.value = '';
  fieldMeta.value = '';

  titleModal.textContent = modal.starter.textContent;
  fieldMeta.value = modal.starter.dataset.meta;
  if ( modal.starter.title ) {
    titleModal.textContent = modal.starter.title;
  }
  if ( modal.starter.dataset.title ) {
    fieldTitle.value = modal.starter.dataset.title;
  }
  if ( modal.starter.dataset.idField ) {
    fieldID.value = modal.starter.dataset.idField;
  }
};

const setupColorFieldModal = ( modal ) => {
  if ( !modal.starter || modal.openedWindow.id !== 'color-field-modal' ) return;

  const titleModal = modal.openedWindow.querySelector( '.modal__title' );
  const fieldID = modal.openedWindow.querySelector( '[name="id"]' );
  const fieldTitle = modal.openedWindow.querySelector( '[name="title"]' );
  const fieldMeta = modal.openedWindow.querySelector( '[name="meta"]' );
  titleModal.textContent = '';
  fieldID.value = '';
  fieldTitle.value = '';
  fieldMeta.value = '';

  titleModal.textContent = modal.starter.textContent;
  fieldMeta.value = modal.starter.dataset.meta;
  if ( modal.starter.title ) {
    titleModal.textContent = modal.starter.title;
  }
  if ( modal.starter.dataset.title ) {
    fieldTitle.value = modal.starter.dataset.title;
  }
  if ( modal.starter.dataset.idField ) {
    fieldID.value = modal.starter.dataset.idField;
  }
};

const setupProductModal = ( modal ) => {
  if ( !modal.starter || modal.openedWindow.id !== 'product-modal' ) return;

  const titleModal = modal.openedWindow.querySelector( '.modal__title' );
  const formModal = modal.openedWindow.querySelector( '#admin-product-form' );
  formModal.reset();
  titleModal.textContent = '';

  titleModal.textContent = modal.starter.textContent;
  if ( modal.starter.title ) {
    titleModal.textContent = modal.starter.title;
  }

  if ( modal.starter.dataset.idField ) {
    /* сюда можно вставить запрос мета информации по ID товара из БД, и расставить значения по полям формы
    ID товара
    const prodID = modal.starter.dataset.idField;
    */
  }
};

const simpleModalConfig = Object.assign( {}, modalConfig, {
  beforeOpen: ( modal ) => {
    setupCheckout( modal );
  },
} );

const adminModalConfig = Object.assign( {}, modalConfig, {
  beforeOpen: ( modal ) => {
    setupTextFieldModal( modal );
    setupColorFieldModal( modal );
    setupProductModal( modal );
  },
} );

const simpleModal = new HystModal( simpleModalConfig );
const adminModal = new HystModal( adminModalConfig );

const initModals = () => {
  initModal( simpleModal );
  initModal( adminModal, 'data-admin-modal' );
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
