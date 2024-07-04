// core version + navigation, pagination modules:
import Swiper from "swiper/bundle";
import { Pagination, Zoom } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css/bundle";

// init Swiper:
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.20209,

  // slidesPerView: 1.8,
  grid: {
    rows: 2,
  },
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  modules: [Pagination, Zoom],
});

export default swiper;
