let homeScore = 0;
let guestScore = 0;
let homeSum = document.getElementById("home-score");
let guestSum = document.getElementById("guest-score");

function addHome1() {
  homeScore += 1;
  homeSum.textContent = homeScore;
}

function addHome2() {
  homeScore += 2;
  homeSum.textContent = homeScore;
}

function addHome3() {
  homeScore += 3;
  homeSum.textContent = homeScore;
}

function addGuest1() {
  guestScore += 1;
  guestSum.textContent = guestScore;
}

function addGuest2() {
  guestScore += 2;
  guestSum.textContent = guestScore;
}

function addGuest3() {
  guestScore += 3;
  guestSum.textContent = guestScore;
}

function newGame() {
  homeSum.textContent = 0;
  guestSum.textContent = 0;
}
