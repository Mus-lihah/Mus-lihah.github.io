const sumRight = document.querySelector(".sum__right");
const sumLeft = document.querySelector(".sum__left");

sumRight.addEventListener("click", handleClick);
sumRight.addEventListener("touchstart", handleTouchStart);
sumRight.addEventListener("touchend", handleTouchEnd);

sumLeft.addEventListener("click", handleClick);
sumLeft.addEventListener("touchstart", handleTouchStart);
sumLeft.addEventListener("touchend", handleTouchEnd);

function handleClick(event) {
  if (event.offsetY < this.offsetHeight / 2) {
    this.textContent = parseInt(this.textContent) + 1;
  } else if (event.offsetY >= this.offsetHeight / 2 && parseInt(this.textContent) > 0) {
    this.textContent = parseInt(this.textContent) - 1;
  }
}

function handleTouchStart(event) {
  this.touchStartY = event.touches[0].clientY;
}

function handleTouchEnd(event) {
  const touchDeltaY = this.touchStartY - event.changedTouches[0].clientY;

  if (touchDeltaY > 0 && this.textContent > 0) {
    this.textContent = parseInt(this.textContent) - 1;
  } else if (touchDeltaY < 0) {
    this.textContent = parseInt(this.textContent) + 1;
  }
}
