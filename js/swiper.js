const brands_slider = new Swiper(".brands_slider", {
  slidesPerView: 3.5,
  spaceBetween: 55,
  speed: 2500,
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    enabled: true,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    500: {
      slidesPerView: 4,
      spaceBetween: 44,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 44,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 44,
    },
    1200: {
      slidesPerView: 4,
    },
    1520: {
      slidesPerView: 5,
    },
  },
});
