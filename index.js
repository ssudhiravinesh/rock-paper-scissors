console.log("HELLO AMMA!")

let computerChoice;
let humanChoice;
let humanScore =0;
let computerScore =0;

function getComputerChoice () {
    let x = (Math.floor(Math.random()* 100)) +1;
    if (x <= 33) {
        computerChoice = "Rock";
    } else if (x <= 66) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
   humanChoice = prompt("Enter your ATTACK CHOICE", "Rock");
   if (humanChoice === null) {
    console.log("Don't click on cancel button. Enter your valid ATTACK CHOICE again");
    getHumanChoice();
   }

   humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

   return humanChoice;
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice !== "Rock" && humanChoice !== "Paper" && humanChoice !== "Scissors") {
        console.log("Enter a valid ATTACK CHOICE!");
        playRound(getHumanChoice(), computerChoice);
       }

    if (humanChoice === "Rock" && computerChoice === "Scissors" || humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log(`Rock BEATS Scissors, ${(humanChoice === "Rock")? "Human" : "Computer"} wins!`);
        ((humanChoice === "Rock") ? humanScore++ : computerScore++);
        console.log("Your Score : " + humanScore);
        console.log("Computer's Score : " + computerScore);
    }
    if (humanChoice === "Rock" && computerChoice === "Paper" || humanChoice === "Paper" && computerChoice === "Rock") {
        console.log(`Paper BEATS Rock, ${(humanChoice === "Paper")? "Human" : "Computer"} wins!`);
        ((humanChoice === "Paper")? humanScore++ : computerScore++);
        console.log("Your Score : " + humanScore);
        console.log("Computer's Score : " + computerScore);
    }
    if (humanChoice === "Paper" && computerChoice === "Scissors" || humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log(`Scissors BEATS Paper, ${(humanChoice === "Scissors")? "Human" : "Computer"} wins!`);
        ((humanChoice === "Scissors")? humanScore++ : computerScore++);
        console.log("Your Score : " + humanScore);
        console.log("Computer's Score : " + computerScore);
    }
    if (humanChoice === "Rock" && computerChoice === "Rock" || humanChoice === "Scissors" && computerChoice === "Scissors" || humanChoice === "Paper" && computerChoice === "Paper") {
        console.log("It's a TIE");
        console.log("Your Score : " + humanScore);
        console.log("Computer's Score : " + computerScore);
    }
}

function playGame () {
    console.log ("Let's begin the game - ROCK PAPER SCISSORS. \n There are five rounds in total. \n In each round you will be prompted to enter your ATTACK CHOICE \n  1. Rock \n 2. Paper \n 3. Scissors \n The computer will also enter a choice. \nAfter five rounds, the winner will be declared.");

    for (let i=0; i<5 ; i++) {
        console.log(`ROUND ${i+1}`);
        playRound(getHumanChoice(), getComputerChoice());
        console.log("\n");
    }
    
    let Winner = (computerScore > humanScore) ? "Computer WINS. Accept your defeat" : (computerScore == humanScore) ? "GAME TIED" : "You WIN! Wanna try again?";
    console.log(Winner);
    
}