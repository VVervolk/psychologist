import "./js/slidesCreator.js";
import "./js/swiper.js";

document.addEventListener("DOMContentLoaded", (event) => {
  // Находим кнопку по её ID
  const openButton = document.querySelector(".header__button-menu");
  const closeButton = document.querySelector(".mobile-menu__close-icon");
  const nav = document.querySelector(".mobile-menu__nav");
  const mobileMenu = document.querySelector(".mobile-menu");

  openButton.addEventListener("click", () => {
    mobileMenu.classList.add("is-open");
  });
  closeButton.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
  });
  nav.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
  });
});
