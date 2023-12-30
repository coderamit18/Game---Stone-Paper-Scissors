let userScore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");

const userScorepara = document.querySelector("#user");

const compscorepara = document.querySelector("#comp-score");

const msg = document.querySelector("#msg");

const genCompChoice = () => {
  let option = ["rock", "paper", "scissors"];

  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};
const draw = () => {
  msg.innerText = "It's Draw.Play again";
  msg.style.backgroundColor = "yellow ";
};
const showWinner = (userWin, userChoice, compchoice) => {
  if (userWin) {
    userScore++;
    userScorepara.innerText = userScore;

    msg.innerText = `You Win Your ${userChoice} beats ${compchoice} 😊..`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compscorepara.innerText = compscore;

    msg.innerText = `You Lose! ${userChoice} beats Your ${compchoice} 😭`;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  const compchoice = genCompChoice();
  if (userChoice == compchoice) {
    //draw game
    draw();
  } else {
    userWin = true;
    if (userChoice === "rock") {
      //scissors,paper
      userWin = compchoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock,paper
      userWin = compchoice === "scissors" ? false : true;
    } else if(userChoice === "scissors") {
      //rock , paper
      compchoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compchoice);
  }
};

choices.forEach((choices) => {
  // console.log(choices);
  choices.addEventListener("click", () => {
    const userChoice = choices.getAttribute("id");
    playGame(userChoice);
  });
});
