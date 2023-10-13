let userScore = 0;
let compScore = 0;
const userScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector("#computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

const input = ["rock", "paper", "scissors"];

rock_div.addEventListener("click", function () {
  const comp_input = input[randomOption()];
  //console.log(comp_input);
  const user = document.getElementById("rock").id;

  console.log(compare(user, comp_input));
});
paper_div.addEventListener("click", function () {
  const comp_input = input[randomOption()];
  //console.log(comp_input);
  const user = document.getElementById("paper").id;

  console.log(compare(user, comp_input));
});
scissors_div.addEventListener("click", function () {
  const comp_input = input[randomOption()];
  //console.log(comp_input);
  const user = document.getElementById("scissors").id;

  console.log(compare(user, comp_input));
});

function compare(user, comp) {
  if (user === "rock" && comp === "paper") {
    //increase comp score by 1 and print in dom
    lose();
    return "paper beats rock. computer wins.";
  } else if (user === "rock" && comp === "scissors") {
    //increase user score by 1
    win();
    return "rock beats scissors. user wins.";
  } else if (user === "paper" && comp === "rock") {
    //increase user score by 1
    win();
    return "paper beats rock. user wins.";
  } else if (user === "paper" && comp == "scissors") {
    //increase comp score by 1
    lose();
    return "scissors beats paper. computer wins.";
  } else if (user === "scissors" && comp === "rock") {
    //increase comp score by 1.
    lose();
    return "rock beats scissors. computer wins.";
  } else if (user === "scissors" && comp === "paper") {
    //increase user score by 1
    win();
    return "scissors beats paper. user wins.";
  } else {
    return "draw";
  }
}
function lose(){
    compScore++;
    computerScore_span.innerHTML = compScore;
}
function win(){
    userScore++;
    userScore_span.innerHTML = userScore;
}

function randomOption() {
  return Math.floor(Math.random() * input.length);
}
