const sumRight = document.querySelector(".sum__right");
const sumLeft = document.querySelector(".sum__left");

sumRight.addEventListener("click", event => {
  if (event.offsetX >= 0 && event.offsetX <= sumRight.offsetWidth && event.offsetY >= 0 && event.offsetY <= sumRight.offsetHeight) {
    if (event.offsetY < sumRight.offsetHeight / 2) {
      sumRight.textContent = parseInt(sumRight.textContent) + 1;
    } else if (event.offsetY >= sumRight.offsetHeight / 2 && parseInt(sumRight.textContent) > 0) {
      sumRight.textContent = parseInt(sumRight.textContent) - 1;
    }
  }
});

sumLeft.addEventListener("click", event => {
    if (event.offsetX >= 0 && event.offsetX <= sumLeft.offsetWidth && event.offsetY >= 0 && event.offsetY <= sumLeft.offsetHeight) {
      if (event.offsetY < sumLeft.offsetHeight / 2) {
        sumLeft.textContent = parseInt(sumLeft.textContent) + 1;
      } else if (event.offsetY >= sumLeft.offsetHeight / 2 && parseInt(sumLeft.textContent) > 0) {
        sumLeft.textContent = parseInt(sumLeft.textContent) - 1;
      }
    }
  });