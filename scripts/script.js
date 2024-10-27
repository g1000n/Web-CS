const slides = document.querySelector(".slides");
const bikes = document.querySelectorAll(".bike");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentIndex = 2;

function updateSlider() {
  slides.style.transform = `translateX(-${(currentIndex - 1) * 33.33}%)`;
  bikes.forEach((bike, index) => {
    bike.classList.remove("active");
    if (index === currentIndex) {
      bike.classList.add("active");
    }
  });
}

prevButton.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : bikes.length - 1;
  updateSlider();
});

nextButton.addEventListener("click", () => {
  currentIndex = currentIndex < bikes.length - 1 ? currentIndex + 1 : 0;
  updateSlider();
});

updateSlider();
