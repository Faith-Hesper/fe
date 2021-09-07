"use strict";

var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".results>p");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");

function getComputerChoice() {
  var choices = ["r", "p", "s"];
  var randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function covertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(user, computer) {
  var smallUserWord = "USER".fontsize(3).sub();
  var smallcompWord = "COMP".fontsize(3).sub();
  var user_Choice = document.getElementById(user);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore; // result_p.innerHTML = covertToWord(user) + " beat " + covertToWord(computer) + " USER WIN.";

  result_p.innerHTML = "".concat(covertToWord(user)).concat(smallUserWord, " beat ").concat(covertToWord(computer)).concat(smallcompWord, " you win!."); //ES6

  user_Choice.classList.add('green-grow'); // 
  // setTimeout(function() { user_Choice.classList.remove('green-grow') }, 500);

  setTimeout(function () {
    return user_Choice.classList.remove('green-grow');
  }, 400); //ES6
}

function lose(user, computer) {
  var smallUserWord = "USER".fontsize(3).sub();
  var smallcompWord = "COMP".fontsize(3).sub();
  var user_Choice = document.getElementById(user);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = "".concat(covertToWord(user)).concat(smallUserWord, " loses to ").concat(covertToWord(computer)).concat(smallcompWord, " you lost...");
  user_Choice.classList.add('red-grow');
  setTimeout(function () {
    return user_Choice.classList.remove('green-grow');
  }, 400);
}

function draw(user, computer) {
  var smallUserWord = "USER".fontsize(3).sub();
  var smallcompWord = "COMP".fontsize(3).sub();
  var user_Choice = document.getElementById(user);
  result_p.innerHTML = "".concat(covertToWord(user)).concat(smallUserWord, " equals ").concat(covertToWord(computer)).concat(smallcompWord, " its a draw.");
  user_Choice.classList.add('gray-grow');
  setTimeout(function () {
    return user_Choice.classList.remove('green-grow');
  }, 400);
}

function game(userChoice) {
  var computerChoice = getComputerChoice(); // 电脑选择

  switch (userChoice + computerChoice) {
    case "rs":
    case "sp":
    case "pr":
      win(userChoice, computerChoice);
      break;

    case "sr":
    case "ps":
    case "rp":
      lose(userChoice, computerChoice);
      break;

    case "ss":
    case "pp":
    case "rr":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function () {
    return game("r");
  });
  paper_div.addEventListener('click', function () {
    return game("p");
  });
  scissors_div.addEventListener('click', function () {
    return game("s");
  });
}

main();