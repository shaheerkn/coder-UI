let buttons = document.querySelectorAll(".slider__button button");
let slides = document.querySelectorAll(".slider__wrapper-slide");

const removeActiveClass = function (childElems, slideElems) {
  for (let i = 0; i < childElems.length; i++) {
    childElems[i].classList.remove("active");
    slideElems[i].classList.remove("active");
  }
};

buttons.forEach((button, i) => {
  button.addEventListener("click", function () {
    removeActiveClass(
      this.parentElement.children,
      slides[i].parentElement.children
    );
    button.classList.add("active");
    slides[i].classList.add("active");
  });
});
