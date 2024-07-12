// core version + navigation, pagination modules:
import Swiper from "swiper/bundle";
import { Pagination, Navigation } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css/bundle";

// init Swiper:
const educationSwiper = new Swiper(".educationSwiper", {
  slidesPerView: 1.20209,

  grid: {
    rows: 2,
  },

  spaceBetween: 16,

  modules: [Pagination, Navigation],

  breakpoints: {
    0: {
      pagination: {
        el: ".swiper-pagination_education",
        clickable: true,
      },
    },
    1280: {
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-back",
      },
      slidesPerView: 2,
      spaceBetween: 24,
    },
  },
});

const reviewsSwiper = new Swiper(".reviewsSwiper", {
  slidesPerView: 1,

  spaceBetween: 12,
  pagination: {
    el: ".swiper-pagination-reviews",
    clickable: true,
  },
  modules: [Pagination],
});

export { educationSwiper, reviewsSwiper };
