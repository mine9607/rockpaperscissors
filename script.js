//Step 1 - Create a function to have computer choose rock, paper, scissors//

function getComputerChoice () {
    let computerResult = Math.floor(Math.random()*3);
    if (computerResult === 0){
        choice = "rock";
    } else if (computerResult === 1){
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
};

//Step 2 - Create a prompt for user input which stores playerSelection (make case insensitive)
function getPlayerChoice(){
    let choice = prompt('Choose:  "Rock", "Paper" or "Scissors"').toLowerCase();
    return choice;
}

//let playerSelection = getPlayerChoice()
//let computerSelection = getComputerChoice()

//Step 2 - Create a function to play a round of rock, paper, scissors
//note - add a try except functionality to require input to match rock, paper, or scissors
function playRound (playerSelection, computerSelection){   
    const player = playerSelection
    const computer = computerSelection
    if (player === computer) {
        result = `This round is a draw. ${player.charAt(0).toUpperCase()}${player.slice(1)} matches ${computer}.`
        arrayValue = "draw"
    } else if ((player === "rock" && computer === "paper")||
        (player === "paper" && computer ==="scissors")||
        (player==="scissors"&& computer==="rock")){
        result = `You lost this round. ${computer.charAt(0).toUpperCase()}${computer.slice(1)} beats ${player}!`
        arrayValue = "lose"
    } else if ((player === "rock" && computer === "scissors")||
        (player==="paper"&&computer==="rock")||
        (player==="scissors"&&computer==="paper")) {
        result = `You won this round.  ${player.charAt(0).toUpperCase()}${player.slice(1)} beats ${computer}!`
        arrayValue = "win"
    } else {
        result = "Undefined"
    }
    return result
}


//code for adding values to an array//
/*
const myArray  = ['I', 'love', 'chocolate', 'frogs'];
myArray.push('and oranges');
//console.log(madeAString) => ['I', 'love', 'chocolate', 'frogs', 'and oranges']
console.log(myArray)
*/

//loop through play round//
function playgame() {
    const winArray = []
    const counts = {}
    for (let i = 0; i < 5; i++) {
        let wins = 0
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        winArray.push(arrayValue)
        console.log(winArray)
    }
    for (const num of winArray){
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    console.log(counts);
    if (counts["win"]>counts["lose"]){
        console.log("You are the winner!")
    } else if (counts["win"]<counts["lose"]){
        console.log("The computer won this round.  Better luck next time!")
    } else {
        console.log("It's a tie!")
    }
}

//note - there is a case where you win or draw in all cases and the code reports tie because it can't compare when lose is null
playgame()

//Console testing//
/*console.log(playerSelection)
console.log (computerSelection)
console.log(playRound(playerSelection, computerSelection))*/