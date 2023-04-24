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

function playRound(){
    let player = getPlayerChoice();
    let computer = getComputerChoice();
    if(player == computer){
        return "tie";
    }else if(player == "scissors" && computer == "rock"){
        return "Computer Wins!";
    }else if(player == "scissors" && computer == "paper"){
        return "You Win!";
    }else if(player == "paper" && computer == "rock"){
        return "You Win!";
    }else if(player == "paper" && computer == "scissors"){
        return "Computer Wins!";
    }else if(player == "rock" && computer == "paper"){
        return "Computer Wins!";
    }else if(player == "rock" && computer == "scissors"){
        return "You Win!";
    }
}

function getPlayerChoice(){
    let tempChoice = prompt("Input Rock, Paper, or Scissors").toLowerCase();
    if(!(tempChoice == "rock" || tempChoice == "paper" || tempChoice == "scissors")){
        do{
           tempChoice = prompt("Despicable choice, input rock, paper, or scissors").toLowerCase();
        }while(!(tempChoice == "rock" || tempChoice == "paper" || tempChoice == "scissors"));
    }
    return tempChoice;
}


alert(playRound());
alert(playRound());
alert(playRound());
alert(playRound());
alert(playRound());