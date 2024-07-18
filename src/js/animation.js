export default document.addEventListener("DOMContentLoaded", function () {
  const elementsOpacity = document.querySelectorAll(".js-animationOpacity");
  const elementsTransform = document.querySelectorAll(".js-animationTransform");
  const options = {
    root: null, // Взять viewport как root
    threshold: 0.1, // Процент видимости элемента (10%)
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // Остановить наблюдение после анимации
      }
    });
  }, options);

  elementsOpacity.forEach((element) => {
    observer.observe(element);
  });

  if (window.innerWidth > 1280) {
    elementsTransform.forEach((element) => {
      observer.observe(element);
    });
  }
});
