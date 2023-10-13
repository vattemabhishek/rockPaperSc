let userScore = 0;
let compScore = 0;
const userScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector("#comp-score");
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
   result_div.innerHTML =  "Paper Covers Rock. You Lose.";
    
  } else if (user === "rock" && comp === "scissors") {
    //increase user score by 1
   win();
    result_div.innerHTML= "Rock Beats Scissors. You Win.";
  } else if (user === "paper" && comp === "rock") {
    //increase user score by 1
   win();
    result_div.innerHTML= "Paper Covers Rock. You Win.";
  } else if (user === "paper" && comp == "scissors") {
    //increase comp score by 1
    lose();
    result_div.innerHTML=  "Scissors Cuts Paper. You Lose.";
  } else if (user === "scissors" && comp === "rock") {
    //increase comp score by 1.
    lose();
    result_div.innerHTML=  "Rock Beats Scissors. You Lose.";
  } else if (user === "scissors" && comp === "paper") {
    //increase user score by 1
    win();
    result_div.innerHTML=  "Scissors Cuts Paper. You Win.";
  } else {
    result_div.innerHTML=  "DRAW";
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
