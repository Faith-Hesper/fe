let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".results>p");
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function covertToWord(letter) {
    if (letter === "r") return "Rock"
    if (letter === "p") return "Paper"
    return "Scissors"
}

function win(user, computer) {
    const smallUserWord = "USER".fontsize(3).sub()
    const smallcompWord = "COMP".fontsize(3).sub()
    const user_Choice = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    // result_p.innerHTML = covertToWord(user) + " beat " + covertToWord(computer) + " USER WIN.";
    result_p.innerHTML = `${covertToWord(user)}${smallUserWord} beat ${covertToWord(computer)}${smallcompWord} you win!.`; //ES6
    user_Choice.classList.add('green-grow'); // 
    // setTimeout(function() { user_Choice.classList.remove('green-grow') }, 500);
    setTimeout(() => user_Choice.classList.remove('green-grow'), 400); //ES6
}

function lose(user, computer) {
    const smallUserWord = "USER".fontsize(3).sub()
    const smallcompWord = "COMP".fontsize(3).sub()
    const user_Choice = document.getElementById(user);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${covertToWord(user)}${smallUserWord} loses to ${covertToWord(computer)}${smallcompWord} you lost...`;
    user_Choice.classList.add('red-grow');
    setTimeout(() => user_Choice.classList.remove('green-grow'), 400);
}

function draw(user, computer) {
    const smallUserWord = "USER".fontsize(3).sub()
    const smallcompWord = "COMP".fontsize(3).sub()
    const user_Choice = document.getElementById(user);
    result_p.innerHTML = `${covertToWord(user)}${smallUserWord} equals ${covertToWord(computer)}${smallcompWord} its a draw.`;
    user_Choice.classList.add('gray-grow');
    setTimeout(() => user_Choice.classList.remove('green-grow'), 400);
}

function game(userChoice) {
    const computerChoice = getComputerChoice(); // 电脑选择
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
    
    rock_div.addEventListener('click', () => game("r"))

    paper_div.addEventListener('click', () => game("p"))

    scissors_div.addEventListener('click', () => game("s"))
}

main()