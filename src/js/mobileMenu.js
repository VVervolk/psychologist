export default document.addEventListener("DOMContentLoaded", (event) => {
  // Находим кнопку по её ID
  const openButton = document.querySelector(".header__button-menu");
  const closeButton = document.querySelector(".mobile-menu__close-icon");
  const nav = document.querySelector(".mobile-menu__nav");
  const mobileMenu = document.querySelector(".mobile-menu");

  openButton.addEventListener("click", () => {
    mobileMenu.classList.add("is-open");
    document.body.classList.add("no-scroll");
  });
  closeButton.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
  });
  nav.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
  });
});
