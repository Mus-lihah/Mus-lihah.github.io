const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");

let prevY; // variable to store the previous y-coordinate of the touch point

// add touch start event listener to the scores
score1.addEventListener("touchstart", handleTouchStart);
score2.addEventListener("touchstart", handleTouchStart);

function handleTouchStart(event) {
  // get the y-coordinate of the touch point
  prevY = event.touches[0].clientY;
}

// add touch move event listener to the scores
score1.addEventListener("touchmove", handleTouchMove);
score2.addEventListener("touchmove", handleTouchMove);

function handleTouchMove(event) {
  // prevent default scrolling behavior
  event.preventDefault();

  // get the current y-coordinate of the touch point
  const currentY = event.touches[0].clientY;

  // calculate the difference between the current and previous y-coordinates
  const diffY = prevY - currentY;

  // update the score based on the direction of the swipe
  if (diffY > 0) {
    // swipe up
    this.textContent = parseInt(this.textContent) + 1;
  } else if (diffY < 0 && this.textContent > 0) {
    // swipe down
    this.textContent = parseInt(this.textContent) - 1;
  }

  // update the previous y-coordinate
  prevY = currentY;
}

// add touch end event listener to the scores
score1.addEventListener("touchend", handleTouchEnd);
score2.addEventListener("touchend", handleTouchEnd);

function handleTouchEnd(event) {
  // reset the previous y-coordinate
  prevY = null;
}

