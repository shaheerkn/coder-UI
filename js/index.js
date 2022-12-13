let sliderNavigation = document.querySelectorAll(".slider__button button");
let slides = document.querySelectorAll(".slider__wrapper-slide");
let counterSection = document.querySelector(".meta-data");
let counterEL = document.querySelectorAll(".meta-data__data span");

const removeActiveClass = function (childElems, slideElems) {
  for (let i = 0; i < childElems.length; i++) {
    childElems[i].classList.remove("active");
    slideElems[i].classList.remove("active");
  }
};

sliderNavigation.forEach((button, i) => {
  button.addEventListener("click", function () {
    removeActiveClass(
      this.parentElement.children,
      slides[i].parentElement.children
    );
    button.classList.add("active");
    slides[i].classList.add("active");
  });
});

counterEL.forEach((counter) => {
  let valueLength = counter.getAttribute("data-value").length;
  counter.style.cssText = `width: ${valueLength}ch`;
});

const options = {
  root: null,
  threshold: 0,
};

const sectionObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      counterEL.forEach((counter) => {
        anime({
          targets: counter,
          innerHTML: ["0000", counter.getAttribute("data-value")],
          round: 1,
          duration: 2000,
        });
      });
      observer.unobserve(entry.target);
    } else {
      return;
    }
  });
}, options);

sectionObserver.observe(counterSection);
