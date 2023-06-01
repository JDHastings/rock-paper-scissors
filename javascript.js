let computerScore = 0;
let playerScore = 0;
let tieCount = 0;

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if(num == 0){
        return "scissors";
    }else if(num == 1){
        return "paper";
    }else{
        return "rock"
    }
}

function playRound(player){
    let computer = getComputerChoice();

    if(!playerScore && !computerScore && !tieCount){
        gameEndMessage.remove();
    }

    if(player == computer){
        roundOver(2);
    }else if(player == "scissors" && computer == "rock"){
        roundOver(1);
    }else if(player == "scissors" && computer == "paper"){
        roundOver(0);
    }else if(player == "paper" && computer == "rock"){
        roundOver(0);
    }else if(player == "paper" && computer == "scissors"){
        roundOver(1);
    }else if(player == "rock" && computer == "paper"){
        roundOver(1);
    }else if(player == "rock" && computer == "scissors"){
        roundOver(0);
    }
}

const cssPlayerScore = document.querySelector('.player-score');
const cssComputerScore = document.querySelector('.computer-score');
const cssTieCount = document.querySelector('.tie-count');

function roundOver(victor){
    if(victor == 0){
        playerScore++;
    }else if(victor == 1){
        computerScore++;
    }else{
        tieCount++;
    }
    cssPlayerScore.textContent = playerScore;
    cssComputerScore.textContent = computerScore;
    cssTieCount.textContent = tieCount;
    if(playerScore == 5 || computerScore == 5){
        gameOver(victor);
        playerScore = 0;
        computerScore = 0;
        tieCount = 0;
    }
}

const container = document.querySelector('.container');
const gameEndMessage = document.createElement('div');

function gameOver(victor){
    if(victor){
        gameEndMessage.textContent = 'Computer Wins!';
    }else{
        gameEndMessage.textContent = 'Player Wins!';
    }
    container.append(gameEndMessage);
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => {
    playRound(button.id);
}));