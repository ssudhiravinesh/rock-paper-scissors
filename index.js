console.log("HELLO AMMA!")

let computerChoice;
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


function playRound (humanChoice, computerChoice) {
    if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        humanScore++;
    } else if(humanChoice == computerChoice){
        humanChoice++;
        computerChoice++;
    } else {
        computerChoice++;
    }
}

const tryAgain = document.querySelector(".tryAgain");
tryAgain.addEventListener("click", ()=>{
    result.textContent="";
    compChoice.textContent="";
    compScore.textContent="";
    hmnScore.textContent="";
    computerScore=0;
    humanScore=0;
    document.body.style.backgroundColor="white";
})

const result = document.querySelector(".result>h3");
const compChoice = document.querySelector(".compChoice");
const compScore = document.querySelector(".computerScore>h3");
const hmnScore = document.querySelector(".humanScore>h3");

const btn = document.querySelectorAll(".btn");
btn.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        if(humanScore == 5|| computerScore == 5) {
            return;
        }
        playRound(e.target.textContent, getComputerChoice());
       
        compChoice.textContent = computerChoice;
        
        compScore.textContent = computerScore;

        hmnScore.textContent = humanScore;

        if(humanScore == 5|| computerScore == 5) {
           
            if(humanScore==computerScore) {
                result.textContent = "It's a TIE!";
                document.body.style.backgroundColor = "yellow";
            } else if (humanScore > computerScore) {
                result.textContent = "You Win!!!";
                document.body.style.backgroundColor = "green";
            } else {
                result.textContent = "Oops! Computer won against you!";
                document.body.style.backgroundColor = "red";
            }
        }
        })
})