let buttons = document.querySelectorAll(".slider__button button");
let slides = document.querySelectorAll(".slider__wrapper-slide");
const removeActiveClass = function (childElems, slideElems) {
  for (let i = 0; i < childElems.length; i++) {
    console.log(childElems);
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

    // let btnStyles = window.getComputedStyle(button);
    // let btnWidth = parseInt(btnStyles.getPropertyValue("width"));

    //   btnOverlay.style.cssText = `left: ${
    //     button.getBoundingClientRect().left
    //   }px; width: ${btnWidth}px `;
  });
});

let counterSection = document.querySelector(".meta-data");
let counterEL = document.querySelectorAll(".meta-data__data span");

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
    counterEL.forEach((item) => {
      item.getAttribute("data-value");
      anime({
        targets: item,
        innerHTML: ["0000", item.getAttribute("data-value")],
        round: 1,
        duration: 2000,
      });
      observer.unobserve(entry.target);
    });
  });
}, options);

sectionObserver.observe(counterSection);
