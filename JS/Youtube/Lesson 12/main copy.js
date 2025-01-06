let score = { draw: 0, win: 0, lose: 0 };
let a = document.getElementById("score");
function renderScore() { a.innerText = `Score : Win ${score.win} Lose: ${score.lose} Draw: ${score.draw} `; };
let playing = false;
renderScore();
function randomMove() {
  let a = Math.floor(Math.random() * 3);
  if (a == 0) {
    return "Rock";
  }
  else if (a == 1) {
    return "Paper";
  }
  else {
    return "Scissors";
  }
}
function playerMove(move) {
  function tie() {
    resultEle.innerText = "Tie";
  }
  function win() {
    resultEle.innerText = "You Win";
  }
  function lose() {
    resultEle.innerText = "You Lose";
  }

  let computerMove = randomMove();
  let moves = document.getElementById("Moves");
  let resultEle = document.getElementById("result");
  moves.innerHTML = `You <img src=${move.toLowerCase()}-emoji.png alt="move.toLowerCase()"> 
  <img src=${computerMove.toLocaleLowerCase()}-emoji.png> Computer`;
  if (move === "Rock") {
    if (computerMove === "Rock") {
      score.draw++;
      tie();
    }
    else if (computerMove == "Paper") {
      score.lose++;
      lose();
    }
    else {
      score.win++;
      win();
    }
  }
  if (move === "Paper") {
    if (computerMove === "Rock") {
      score.win++;
      win();
    }
    else if (computerMove == "Paper") {
      score.draw++;
      tie();
    }
    else {
      score.lose++;
      lose();
    }
  }
  if (move === "Scissors") {
    if (computerMove === "Rock") {

      score.lose++;
      lose();
    }
    else if (computerMove == "Paper") {
      score.win++;
      win();
    }
    else {
      score.draw++;
      tie();
    }
  }
  let a = document.getElementById("score");
  renderScore();
}
function reset() {
  score.win = 0;
  score.draw = 0;
  score.lose = 0;
  renderScore();
}
let intervalId;
function autoplay() {
  if (!playing) {
    playing = true;
    intervalId = setInterval(() => {
      playerMove(randomMove());
    }, 1000);
  }
  else {
    clearInterval(intervalId);
    playing = false;
  }
}

document.body.addEventListener("keydown",event=>{
  if(event.key=='r'){
    playerMove("Rock");
  }
  else if(event.key=='p'){
    playerMove("Paper");
  }
  else{
    playerMove("Rock");
  }
});