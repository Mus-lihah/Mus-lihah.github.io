const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");

let prevY;
let targetScore;
let activeScore; 
score1.addEventListener("touchstart", handleTouchStart);
score2.addEventListener("touchstart", handleTouchStart);
score1.addEventListener("mousedown", handleMouseDown);
score2.addEventListener("mousedown", handleMouseDown);

function handleTouchStart(event) {
  activeScore = this;
  prevY = event.touches[0].clientY;
  targetScore = null;
}

function handleMouseDown(event) {
  activeScore = this;
  prevY = event.clientY;
  targetScore = null;
}

score1.addEventListener("touchmove", handleTouchMove);
score2.addEventListener("touchmove", handleTouchMove);
score1.addEventListener("mousemove", handleMouseMove);
score2.addEventListener("mousemove", handleMouseMove);

function handleTouchMove(event) {
  event.preventDefault();

  const currentY = event.touches[0].clientY;

  const diffY = prevY - currentY;

  if (!targetScore) {
    if (diffY > 0) {
      targetScore = parseInt(activeScore.textContent) + 1;
    } else if (diffY < 0 && activeScore.textContent > 0) {
      targetScore = parseInt(activeScore.textContent) - 1;
    }
  }

  if (targetScore > 21) {
    targetScore = 21;
  } else if (targetScore < 0) {
    targetScore = 0;
  }

  prevY = currentY;
}

function handleMouseMove(event) {
  event.preventDefault();

  const currentY = event.clientY;

  const diffY = prevY - currentY;

  if (!targetScore) {
    if (diffY > 0) {
      targetScore = parseInt(activeScore.textContent) + 1;
    } else if (diffY < 0 && activeScore.textContent > 0) {
      targetScore = parseInt(activeScore.textContent) - 1;
    }
  }

  if (targetScore > 21) {
    targetScore = 21;
  } else if (targetScore < 0) {
    targetScore = 0;
  }

  prevY = currentY;
}

score1.addEventListener("touchend", handleTouchEnd);
score2.addEventListener("touchend", handleTouchEnd);
score1.addEventListener("mouseup", handleMouseUp);
score2.addEventListener("mouseup", handleMouseUp);

function handleTouchEnd(event) {
  prevY = null;

  if (targetScore !== null) {
    animateScore.bind(activeScore)();
  }
}

function handleMouseUp(event) {
  prevY = null;

  if (targetScore !== null) {
    animateScore.bind(activeScore)();
  }
}

function animateScore() {
  if (parseInt(this.textContent) === targetScore) {
    return;
  }

  if (parseInt(this.textContent) < targetScore) {
    this.textContent = parseInt(this.textContent) + 1;
  } else {
  this.textContent = parseInt(this.textContent) - 1;
  }
  
  setTimeout(animateScore.bind(this), 200);
  }
