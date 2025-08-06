// Inicialización de carruseles con Swiper.js
const heroSwiper = new Swiper('.hero-swiper', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.hero-swiper .swiper-pagination',
    clickable: true,
  },
});

const portafolioSwiper = new Swiper('.portafolio-swiper', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  pagination: {
    el: '.portafolio-swiper .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

const testimoniosSwiper = new Swiper('.testimonios-swiper', {
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.testimonios-swiper .swiper-pagination',
    clickable: true,
  },
});
