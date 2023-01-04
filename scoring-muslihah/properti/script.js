const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");

let prevY; // variable to store the previous y-coordinate of the touch point
let targetScore; // variable to store the target score
let activeScore; // variable to store the active score element

// add touch start event listener to the scores
score1.addEventListener("touchstart", handleTouchStart);
score2.addEventListener("touchstart", handleTouchStart);

function handleTouchStart(event) {
  // set the active score element
  activeScore = this;
  // get the y-coordinate of the touch point
  prevY = event.touches[0].clientY;
  // store the initial score as the target score
  targetScore = parseInt(this.textContent);
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

  // update the target score based on the direction of the swipe
  if (diffY > 0) {
    // swipe up
    targetScore++;
  } else if (diffY < 0 && targetScore > 0) {
    // swipe down
    targetScore--;
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

  // start the animation loop
  animateScore.bind(activeScore)();
}

function animateScore() {
  // check if the current score is the same as the target score
  if (parseInt(this.textContent) === targetScore) {
    // stop the animation loop
    return;
  }

  // update the current score
  if (parseInt(this.textContent) < targetScore) {
    this.textContent = parseInt(this.textContent) + 1;
  } else {
    this.textContent = parseInt(this.textContent) - 1;
  }

  // schedule the next animation frame
  requestAnimationFrame(animateScore.bind(this));
}
