function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
}

// function oldPlayRound() {
//     let playerSelection = window.prompt("Rock, Paper, or Scissors?").toLowerCase();
//     let compSeclection = computerPlay();
//     if (playerSelection == compSeclection) {
//         return "Draw"
//     } 
//     if (playerSelection == "rock" && compSeclection == "paper") {
//         return "You lose! Paper beats Rock";
//     } 
//     if (playerSelection == "rock" && compSeclection == "scissors") {
//         return "You win! Rock beats Scissors"
//     }
//     if (playerSelection == "paper" and compSeclection == "rock") {
//         win
//     }
//     if (playerSelection == "paper" and compSeclection == "scissors") {
//         lose
//     }
//     if (playerSelection == "scissors" and compSeclection == "rock") {
//         lose
//     }
//     if (playerSelection == "scissors" and compSeclection == "paper") {
//         win
//     }
// }

function playRound() {
    let playerSelection = window.prompt("Rock, Paper, or Scissors?").toLowerCase();
    //console.log("You chose " + playerSelection);
    let compSeclection = computerPlay();
    //console.log("The computer chose " + compSeclection);
    if (playerSelection == compSeclection) 
    {
        console.log("Draw!");
        return "Draw"
    } 
    if ((playerSelection == "rock" && compSeclection == "paper") 
        || (playerSelection == "paper" && compSeclection == "scissors")
        || (playerSelection == "scissors" && compSeclection == "rock"))
    {
        console.log("You lose! " + compSeclection + " beats " + playerSelection);
        return "comp"
    }

    if ((playerSelection == "rock" && compSeclection == "scissors")
        || (playerSelection == "paper" && compSeclection == "rock")
        || (playerSelection == "scissors" && compSeclection == "paper"))
    
    {
        console.log("You win! " + playerSelection + " beats " + compSeclection);
        return "player";
    }
}

function playGame() {
    let playScore = 0;
    let compScore = 0;
    // while (playScore && compScore < 3) {
    //     let winner = playRound();
    //     if (winner == "player") {
    //         playScore = playScore + 1;
    //     }
    //     if (winner == "comp") {
    //         compScore == compScore + 1;
    //     }
    // }
    for (var i = 0; i < 5; i++) {
        let winner = playRound();
        if (winner == "comp") {
            compScore++
        }
        if (winner == "player") {
            playScore++
        }
    }
    if (playScore == 2) {
        console.log("You win the game!")
    }
    if (compScore == 2) {
        console.log("You lose the game!")
    }
}
