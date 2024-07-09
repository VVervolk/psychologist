import data from "../../reviews.json";
import textCutter from "./textCutter";
const swiperWrapper = document.querySelector(".swiper-wrapper-js");

export default document.addEventListener("DOMContentLoaded", () => {
  data.forEach(({ name, review, date }, idx) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide slide-review";
    slide.dataset.index = idx;

    const reviewName = document.createElement("p");
    reviewName.className = "slide-review__name";
    reviewName.textContent = name;

    let reviewToAdd = review;

    if (review.length > 205) {
      reviewToAdd = textCutter(review);

      const buttonShowMore = document.createElement("button");
      buttonShowMore.className = "button-show-more";
      buttonShowMore.textContent = "Показати більше";
      buttonShowMore.dataset.toggle = "hide";

      buttonShowMore.addEventListener("click", () => {
        if (buttonShowMore.dataset.toggle === "hide") {
          reviewText.textContent = review;
          buttonShowMore.textContent = "Показати менше";
          buttonShowMore.dataset.toggle = "show";
        } else {
          reviewText.textContent = reviewToAdd;
          buttonShowMore.textContent = "Показати більше";
          buttonShowMore.dataset.toggle = "hide";
        }
      });

      slide.appendChild(buttonShowMore);
    }

    const reviewText = document.createElement("p");
    reviewText.className = "slide-review__review";
    reviewText.textContent = reviewToAdd;

    const reviewDate = document.createElement("span");
    reviewDate.className = "slide-review__date";
    reviewDate.textContent = date;

    slide.appendChild(reviewName);
    slide.appendChild(reviewText);
    slide.appendChild(reviewDate);

    swiperWrapper.appendChild(slide);
  });
});
