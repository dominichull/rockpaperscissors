function gameLength(){
    let userLength = prompt("Best out of?");
    bestOf = parseInt(userLength);
    if (bestOf == 1) {
        firstTo = 1
    } 

    else if ((bestOf % 2) == 0) {
       firstTo = (bestOf / 2) + 1;
    } 

    else if ((bestOf % 2) == 1) {
        firstTo = (bestOf / 2) + 0.5;
    } 
    else {
        alert ('Please enter a number')
        firstTo = 'Non-existent';
    }
    console.log(firstTo);
    return firstTo;
}

function computerChoiceGeneration(){
    randomNumber = Math.floor(Math.random() * 100);

    if ((randomNumber % 3) == 0){
        computerChoice = "ROCK";
    }
    else if ((randomNumber % 3) == 1){
        computerChoice = "PAPER";
    }
    else {
        computerChoice = "SCISSORS";
    }

    return  computerChoice;
}

function oneRound (){
    
    let selectionAnyCase = prompt("Rock, Paper or Scissors?");
    let selection = selectionAnyCase.toUpperCase();
    computerChoiceGeneration();

    if (selection == "ROCK"){

        if (computerChoice == "ROCK"){
            console.log("The computer chose Rock. It's a draw! Try again.");
            oneRound();
        }
        else if (computerChoice == "PAPER"){
            console.log("The computer chose Paper. You lost!");
            computerScore++;
            return computerScore;
        }
        else {
            console.log("The computer chose Scissors. You won!")
            userScore++;
            return userScore;
        }


    }
    else if (selection == "PAPER"){
        
        if (computerChoice == "ROCK"){
            console.log("The computer chose Rock. You win!");
            userScore++;
            return userScore;
        }

        else if (computerChoice == "PAPER"){
            console.log("The computer chose Paper. It's a draw!");
            oneRound();
        }

        else {
            console.log("The computer chose Scissors. You lost!");
            computerScore++;
            return computerScore;
        }

    }

    else if (selection == "SCISSORS"){

        if (computerChoice == "ROCK"){
            console.log("The computer chose Rock. You lose!");
            computerScore++;
            return computerScore;
        }

        else if (computerChoice == "PAPER"){
            console.log("The computer chose Paper. You win!");
            userScore++;
            return userScore;
        
        }

        else {
            console.log("The computer chose Scissors. It's a draw!");
            oneRound();

        }

    }

    else {
        oneRound();

    }

}

gameLength();
let userScore = 0;
let computerScore = 0;

while(userScore < firstTo && computerScore < firstTo){
    console.log(userScore);
    oneRound();
    }

if (userScore < computerScore) {
    alert("I'm sorry, You Lost");
}
else {
    alert("Congrats on the win!");
}