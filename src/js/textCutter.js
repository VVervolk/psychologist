import data from "../../reviews.json";
const swiperWrapper = document.querySelector(".swiper-wrapper-js");

export default document.addEventListener("DOMContentLoaded", () => {
  data.forEach(({ name, review, date }) => {
    let reviewToAdd = review;
    if (review.length > 250) {
      const truncated = review.slice(0, 200);
      const lastSpace = truncated.lastIndexOf(" ");
      reviewToAdd = truncated.slice(0, lastSpace) + "...";
    }
    console.log(reviewToAdd.length);

    const slideHTML = `
    <div class="swiper-slide slide-review">
      <p class="slide-review__name">${name}</p>
      <p class="slide-review__review">${reviewToAdd}</p>
      <span class="slide-review__date">${date}</span>
    </div>
    `;

    swiperWrapper.innerHTML += slideHTML;
  });
});
