const sliderConfig = {
  default: {
    slidesPerView: 1,
    spaceBetween: 30,
    watchSlidesProgress: true,
  },
  novelties: {
    slidesPerView: 1.4,
    pagination: {
      el: '#novelties-slider .slider__pagination',
      clickable: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 1.8,
      },
      992: {
        slidesPerView: 3,
      },
    },
  },
  productCard: {
    spaceBetween: 0,
    pagination: {
      el: '.product-slider-card__pagination',
      clickable: false,
    },
  },
  product: {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 5,
    loop: true,
  },
  productThumbs: {
    slidesPerView: 5,
    spaceBetween: 5,
  },
};

const smoothScrollConfig = {
  speed: 900,
  speedAsDuration: true,
  updateURL: false,
};

const observerConfig = {
  scrollTop: {
    rootMargin: '600px',
    threshold: 1,
  },
};

const modalConfig = {
  linkAttributeName: false,
  catchFocus: true,
  closeOnEsc: true,
  backscroll: true,
};

export {
  sliderConfig,
  smoothScrollConfig,
  observerConfig,
  modalConfig
};
