const p1 = {
  score: 0,
  button: document.querySelector("#buttonP1"),
  display: document.querySelector("#display1"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#buttonP2"),
  display: document.querySelector("#display2"),
};

const playingTo = document.querySelector("#modalidad");
const buttonrst = document.querySelector("#reset");

let isGameOver = false;
let p1Score = 0;
let p2Score = 0;
let finalScore = 3;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score++;
    if (player.score === finalScore) {
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
      isGameOver = true;
    }
    player.display.textContent = player.score;
  }
}

playingTo.addEventListener("change", function () {
  finalScore = parseInt(this.value);
  reset();
});

p1.button.addEventListener("click", () => {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", () => {
  updateScores(p2, p1);
});

buttonrst.addEventListener("click", reset);

function reset() {
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.innerText = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
    isGameOver = false;
  }
}
