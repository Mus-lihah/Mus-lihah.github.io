const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");

let prevY; // variable to store the previous y-coordinate of the touch point
let targetScore; 
let activeScore;

score1.addEventListener("touchstart", handleTouchStart);
score2.addEventListener("touchstart", handleTouchStart);

function handleTouchStart(event) {
  activeScore = this;
  prevY = event.touches[0].clientY;
  targetScore = parseInt(this.textContent);
}

score1.addEventListener("touchmove", handleTouchMove);
score2.addEventListener("touchmove", handleTouchMove);

function handleTouchMove(event) {
  event.preventDefault();

  const currentY = event.touches[0].clientY;

  const diffY = prevY - currentY;

  if (diffY > 0) {
    targetScore++;
  } else if (diffY < 0 && targetScore > 0) {
    targetScore--;
  }

  prevY = currentY;
}

score1.addEventListener("touchend", handleTouchEnd);
score2.addEventListener("touchend", handleTouchEnd);

function handleTouchEnd(event) {
  prevY = null;

  animateScore.bind(activeScore)();
}

function animateScore() {
  if (parseInt(this.textContent) === targetScore) {
    // stop the animation loop
    return;
  }


  if (parseInt(this.textContent) < targetScore) {
    this.textContent = parseInt(this.textContent) + 1;
  } else {
    this.textContent = parseInt(this.textContent) - 1;
  }

  requestAnimationFrame(animateScore.bind(this));
}
