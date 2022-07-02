VanillaTilt.init(document.querySelector("#imagecomparison"), {
  max: 10,
  speed: 1000,
  scale: 1.03,
});

const slider = document.querySelector("#imagecomparison");
const sliderimgwrapper = document.querySelector(
  "#imagecomparison .image-wrapper"
);
const sliderhandle = document.querySelector("#imagecomparison .handle");

slider.addEventListener("mousemove", sliderMouseMove);

function sliderMouseMove(event) {
  if (isSliderLocked) return;

  const sliderLeftX = slider.offsetLeft;
  const sliderWidth = slider.clientWidth;
  const sliderHandleWidth = sliderhandle.clientWidth;

  let mouseX = (event.clientX || event.touches[0].clientX) - sliderLeftX;
  if (mouseX < 1) mouseX = 1;
  else if (mouseX > sliderWidth) mouseX = sliderWidth;

  sliderimgwrapper.style.width = `${((1 - mouseX / sliderWidth) * 100).toFixed(
    4
  )}%`;
  sliderhandle.style.left = `calc(${((mouseX / sliderWidth) * 100).toFixed(
    4
  )}% - ${sliderHandleWidth / 2}px)`;
}

let isSliderLocked = false;

slider.addEventListener("mouseup", sliderMouseUp);

function sliderMouseUP() {
  if (!isSliderLocked) isSliderLocked = true;
}
