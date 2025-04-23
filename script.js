let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const result = document.querySelector("#result");
const userScorePara = document.querySelector("#your-score");
const compScorePara = document.querySelector("#comp-score");



const drawGame = () => {
    console.log("Draw Game");
    result.innerText = "Draw Game!"
    result.style.backgroundColor = "black";

}

const userWin = (userChoice,compChoice) => {
    console.log("User Wins");
    result.innerText = `You Win! ${userChoice} beats ${compChoice}`;
    result.style.backgroundColor = "green";
    userscore++;
    userScorePara.innerText = userscore;

}

const compWin = (userChoice,compChoice) => {
    console.log("User Lose");
    result.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
    result.style.backgroundColor = "red";
    compscore++;
    compScorePara.innerText = compscore;
}


const genCompChoice = () => {
    const options = ["rock","paper","scizzor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const playGame = (userChoice) => {
    console.log("User choice is: ", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice is: ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    if(userChoice == "rock" && compChoice == "paper"){
        compWin(userChoice,compChoice);
    }
    if(userChoice == "rock" && compChoice == "scizzor"){
        userWin(userChoice,compChoice);
    }
    if(userChoice == "scizzor" && compChoice == "paper"){
        userWin(userChoice,compChoice);
    }
    if(userChoice == "scizzor" && compChoice == "rock"){
        compWin(userChoice,compChoice);
    }
    if(userChoice == "paper" && compChoice == "rock"){
        userWin(userChoice,compChoice);
    }
    if(userChoice == "paper" && compChoice == "scizzor"){
        compWin(userChoice,compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});