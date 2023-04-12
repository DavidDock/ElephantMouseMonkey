//question list
const questions = [{
    question: "Which animal can hear out of its feet?",
    a: "Elephant",
    b: "Mouse",
    c: "Monkey",
    answer: "Elephant",
  },
  {
    question: "How fast can a Monkey run?",
    a: "15mph",
    b: "25mph",
    c: "Over 30mph",
    answer: "Over 30mph",
  },
  {
    question: "Whats the smallest object an Elephant can pick up?",
    a: "Watermelon",
    b: "Tennis ball",
    c: "Grain of rice",
    answer: "Grain of rice",
  },
  {
    question: "What animal isn't born blind?",
    a: "Elephant",
    b: "Mouse",
    c: "Monkey",
    answer: "Monkey",
  },
  {
    question: "Which animal can sing?",
    a: "Mouse",
    b: "Elephant",
    c: "Monkey",
    answer: "Mouse",
  },
  {
    question: "How long are Elephants pregnant?",
    a: "9 Months",
    b: "18 Months",
    c: "22 Months",
    answer: "22 Months",
  },
  {
    question: "Who lives longer?",
    a: "Mouse",
    b: "Elephant",
    c: "Monkey",
    answer: "Elephant",
  },
  {
    question: "Whats a Mouses favourite food?",
    a: "Grain",
    b: "Chocolate",
    c: "Cheese",
    answer: "Chocolate",
  },
  {
    question: "How many species of Monkey are there?",
    a: "Over 264",
    b: "Under 200",
    c: "About 147",
    answer: "Over 264",
  },
  {
    question: "Which animal sleeps least?",
    a: "Monkey",
    b: "Mouse",
    c: "Elephant",
    answer: "Elephant",
  },
];

//all const needed
const options = document.getElementsByClassName('options');
const questionSection = document.getElementById("question-section");
const answer = document.getElementById("answer");
const question = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const wrong = document.getElementById("wrong");
const rules = document.getElementById("rules");
const forest = document.getElementById("forest");
const savannah = document.getElementById("savannah");
const meadow = document.getElementById("meadow");
const background = document.getElementsByTagName("body")[0];
const gameContainer = document.getElementById("game-container");
const yourImage = document.getElementById("your-image");
const computerImage = document.getElementById("computer-image");
const animals = document.getElementsByClassName("animals");
const result = document.getElementById("result");
const yourScoreDisplay = document.getElementById("your-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resultsAreaWinner = document.getElementById("results-area-winner");
const resultsAreaLoser = document.getElementById("results-area-loser");
const resets = document.getElementsByClassName("resets");

//all let variables needed through game
let currentQuestion = {};
let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;

//get random question from question list
//display in html
const randomNumber = Math.floor(Math.random() * 10);
currentQuestion = questions[randomNumber];
question.innerText = currentQuestion.question;
option1.innerText = currentQuestion.a;
option2.innerText = currentQuestion.b;
option3.innerText = currentQuestion.c;

//add event listener for each user answer
//run questionCheck function
for (let option of options) {
  option.addEventListener("click", questionCheck);
}

//determine if answer is correct
//execute relevent actions if correct or incorrect
function questionCheck() {
  const picked = this.innerHTML;
  if (picked === currentQuestion.answer) {

    questionSection.style.display = "none";
    rules.style.display = "flex";

  } else {
    this.style.display = "none";
    questionSection.style.backgroundColor = "rgba(253,14,53, 0.8)";
    wrong.style.display = "block";
    answer.style.display = "none";
  }
}

//event listeners for destination choice buttons
//runs functions to move to relevant game area and hide others
savannah.addEventListener('click', function () {
  background.classList.remove("jungle-add");
  background.classList.add("savannah-add");
  background.classList.remove("meadow-add");
  background.classList.remove("forest-add");
  rules.style.display = "none";
  gameContainer.style.display = "block";
});

forest.addEventListener('click', function () {
  background.classList.remove("jungle-add");
  background.classList.add("forest-add");
  background.classList.remove("savannah-add");
  background.classList.remove("meadow-add");
  rules.style.display = "none";
  gameContainer.style.display = "block";
});

meadow.addEventListener('click', function () {
  background.classList.remove("jungle-add");
  background.classList.add("meadow-add");
  background.classList.remove("savannah-add");
  background.classList.remove("forest-add");
  rules.style.display = "none";
  gameContainer.style.display = "block";
});

//get each animal choice from array
//add event listener for each animal and run game
for (let animal of animals) {
  animal.addEventListener("click", gameRun);
}

//determine user choice from click
//display choice as image in html
//run functions getComputerChoice
//run function for getResult
//run function to check if game is over
function gameRun() {
  userChoice = this.getAttribute("id");
  yourImage.src = `assets/images/${userChoice}.webp`;
  yourImage.alt = `Your choice: cartoon ${userChoice}`;
  getComputerChoice();
  getResult();
  gameOver();
}


//function to pick random number for computer
//asign the computer a choice
//display comuter choice image in html
//function inncorect to inform user answer is wrong
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    computerChoice = 'elephant';
  }
  if (randomNumber === 1) {
    computerChoice = 'mouse';
  }
  if (randomNumber === 2) {
    computerChoice = 'monkey';
  }
  computerImage.src = `assets/images/${computerChoice}.webp`;
  computerImage.alt = `Computers choice: cartoon ${computerChoice}`;
}

//function to get result and from each round and run relevant function
function getResult() {
  if (computerChoice === userChoice) {
    draw();
    result.innerHTML = "ITS A DRAW";
  }
  if (computerChoice === 'elephant' && userChoice === 'mouse') {
    youWin();
    result.innerHTML = "YOU WIN <br> your Mouse scares their Elephant";
  }
  if (computerChoice === 'elephant' && userChoice === 'monkey') {
    computerWins();
    result.innerHTML = "YOU LOSE <br> their Elephant squashes your Monkey";
  }
  if (computerChoice === 'mouse' && userChoice === 'monkey') {
    youWin();
    result.innerHTML = "YOU WIN <br> your Monkey catches their Mouse";
  }
  if (computerChoice === 'mouse' && userChoice === 'elephant') {
    computerWins();
    result.innerHTML = "YOU LOSE <br> their Mouse scares your Elephant";
  }
  if (computerChoice === 'monkey' && userChoice === 'elephant') {
    youWin();
    result.innerHTML = "YOU WIN <br> your Elephant squashes their Monkey";
  }
  if (computerChoice === 'monkey' && userChoice === 'mouse') {
    computerWins();
    result.innerHTML = "YOU LOSE <br> their Monkey catches your Mouse";
  }
}

//draw function
function draw() {
  yourImage.classList.remove("win", "lose");
  computerImage.classList.remove("win", "lose");
  result.style.opacity = "1";
}

//function if user wins
function youWin() {
  userScore++;
  yourScoreDisplay.innerHTML = userScore;
  yourImage.classList.remove("lose");
  yourImage.classList.add("win");
  computerImage.classList.add("lose");
  result.style.opacity = "1";
}

//function if computer wins
function computerWins() {
  computerScore++;
  computerScoreDisplay.innerHTML = computerScore;
  computerImage.classList.remove("lose");
  computerImage.classList.add("win");
  yourImage.classList.add("lose");
  result.style.opacity = "1";
}

//function to check if game is over game send to relevant results area
function gameOver() {
  if (userScore === 5) {
    gameContainer.style.display = "none";
    resultsAreaWinner.style.display = "flex";
  }
  if (computerScore === 5) {
    gameContainer.style.display = "none";
    resultsAreaLoser.style.display = "flex";
  }
}

//getting each play again button
//event listener for button click
//reloads window
for (let reset of resets) {
  reset.addEventListener("click", function () {
    location.reload();
  });
}