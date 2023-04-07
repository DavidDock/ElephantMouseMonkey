//question list
const questions = [
  {
    question: "can an elephant pick up a grain of rice?",
    a: "yes",
    b: "no",
    c: "maybe",
    answer: "yes",
  },
  {
    question: "which animal can sing?",
    a: "mouse",
    b: "monkey",
    c: "elephant",
    answer: "mouse",
  },
  {
    question: "which animal isnt born blind?",
    a: "mouse",
    b: "elephant",
    c: "monkey",
    answer: "monkey",
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
const background = document.getElementById("background");
const gameContainer = document.getElementById("game-container");
const yourImage = document.getElementById("your-image");
const computerImage = document.getElementById("computer-image")
const animals = document.getElementsByClassName("animals");
const result = document.getElementById("result");
const yourScoreDisplay = document.getElementById("your-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resultsAreaWinner = document.getElementById("results-area-winner");
const resultsAreaLoser = document.getElementById("results-area-loser");
const resets = document.getElementsByClassName("resets");

//all let variables needed through game loops
let currentQuestion = {};
let userChoice
let computerChoice
let userScore = 0;
let computerScore = 0;

//get random question from question list
//display in html
const randomNumber = Math.floor(Math.random() * 3);
currentQuestion = questions[randomNumber];
question.innerText = currentQuestion.question;
option1.innerText = currentQuestion.a;
option2.innerText = currentQuestion.b;
option3.innerText = currentQuestion.c;

//add event listener for each user answer
//determain if correct
//execute relevent function
for (let option of options) {
  option.addEventListener("click", function() {
    const picked = this.innerHTML;
    if (picked === currentQuestion.answer) {
      correct();
    } else {
      this.style.display= "none";
      incorrect();
    }
  })
  }

//function inncorect to inform user answer is wrong and choose again
function incorrect() {
  questionSection.style.backgroundColor= "#fd0e35";
  wrong.style.display= "block";
  answer.style.display= "none"; 
}

//corect answer function - takes user to rules area
function correct() {
  questionSection.style.display = "none";
  rules.style.display = "flex"; 
};

//get each animal choice from array
//add event listener for each animal
//determine user choice from click
//display choice as image in html
//run functions getComputerChoice
//run function for getResult
//run function to check if game is over
for (let animal of animals) {
  animal.addEventListener("click", function() {
    userChoice = this.getAttribute("id");
    yourImage.src = `assets/images/${userChoice}.png`;
    yourImage.alt = `image of your animal choice, which was ${userChoice}`;
    getComputerChoice();
    getResult();
    gameOver();
  })
  }

//event listeners for destination choice buttons
//runs functions inside event listner to move to relevant game area
savannah.addEventListener('click', function() {
    background.classList.remove("jungle-add");
    background.classList.add("savannah-add");
    background.ariaLabel = 'Background cartoon image of a savannah';
    background.classList.remove("meadow-add");
    background.classList.remove("forest-add");
    rules.style.display = "none";
    gameContainer.style.display= "block";
  });
forest.addEventListener('click', function() {
    background.classList.remove("jungle-add");
    background.classList.add("forest-add");
    background.ariaLabel = 'Background cartoon image of a forest';
    background.classList.remove("savannah-add");
    background.classList.remove("meadow-add");
    rules.style.display = "none";
    gameContainer.style.display= "block";
  });
  meadow.addEventListener('click', function() {
    background.classList.remove("jungle-add");
    background.classList.add("meadow-add");
    background.ariaLabel = 'Background cartoon image of a meadow';
    background.classList.remove("savannah-add");
    background.classList.remove("forest-add");
    rules.style.display = "none";
    gameContainer.style.display= "block";
  });

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
  computerImage.src = `assets/images/${computerChoice}.png`;
  computerImage.alt = `image of the animal the computer choice, which was ${computerChoice}`;
}

//function to get result and from each round and run relevant function
function getResult() {
  if (computerChoice === userChoice) {
    draw();
    result.innerHTML= "ITS A DRAW"
 }
 if (computerChoice === 'elephant' && userChoice === 'mouse') {
    youWin();
    result.innerHTML= "YOU WIN <br> your Mouse scares their Elephant" 
 }
 if (computerChoice === 'elephant' && userChoice === 'monkey') {
    computerWins();
    result.innerHTML= "YOU LOSE <br> their Elephant squashes your Monkey"
 }
 if (computerChoice === 'mouse' && userChoice === 'monkey') {
    youWin();
    result.innerHTML= "YOU WIN <br> your Monkey catches their Mouse"
 }
 if (computerChoice === 'mouse' && userChoice === 'elephant') {
    computerWins();
    result.innerHTML= "YOU LOSE <br> their Mouse scares your Elephant"
 }
 if (computerChoice === 'monkey' && userChoice === 'elephant') {
    youWin();
    result.innerHTML= "YOU WIN <br> your Elephant squashes their Monkey"
 }
 if (computerChoice === 'monkey' && userChoice === 'mouse') {
    computerWins();
    result.innerHTML= "YOU LOSE <br> their Monkey catches your Mouse"
 }
}

//draw function
function draw() {
  yourImage.classList.remove("win", "lose");
  computerImage.classList.remove("win", "lose");
  result.style.opacity= "1";
}

//function if user wins
function youWin() {
  userScore++;
  yourScoreDisplay.innerHTML = userScore;
  yourImage.classList.remove("lose");
  yourImage.classList.add("win");
  computerImage.classList.add("lose");
  result.style.opacity= "1";
}

//function if computer wins
function computerWins() {
  computerScore++;
  computerScoreDisplay.innerHTML = computerScore;
  computerImage.classList.remove("lose");
  computerImage.classList.add("win");
  yourImage.classList.add("lose");
  result.style.opacity= "1";
}

//function to check if game is over game send to relevant results area
function gameOver() {
  if (userScore === 5) {
    gameContainer.style.display= "none";
    resultsAreaWinner.style.display= "flex";
  }
  if (computerScore === 5) {
    gameContainer.style.display= "none";
    resultsAreaLoser.style.display= "flex";
  }
}

//getting each play again button
//event listener for button click
//takes player to pick destination area and resets scores
for (let reset of resets) {
  reset.addEventListener("click", function() {
  resultsAreaWinner.style.display= "none";
  resultsAreaLoser.style.display= "none";
  rules.style.display = "flex";
  userScore = 0;
  computerScore = 0;
  yourScoreDisplay.innerHTML = userScore;
  computerScoreDisplay.innerHTML = computerScore;
  yourImage.src = `assets/images/animals.png`;
  yourImage.alt = `alt="Image of 3 possible animal choices: elephant, mouse and monkey"`;
  computerImage.src = `assets/images/animals.png`;
  computerImage.alt = `alt="Image of 3 possible animal choices: elephant, mouse and monkey"`;
  yourImage.classList.remove("lose");
  computerImage.classList.remove("lose");
  yourImage.classList.remove("win");
  computerImage.classList.remove("win");
  result.style.opacity= "0";
  })
}  