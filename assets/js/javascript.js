//all const needed
const questionSection = document.getElementById("question-section");
const rules = document.getElementById("rules");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const wrong = document.getElementById("wrong");
const answer = document.getElementById("answer");
const question = document.getElementById("question");
const forest = document.getElementById("forest");
const savannah = document.getElementById("savannah");
const meadow = document.getElementById("meadow");
const body = document.getElementsByTagName("body")[0]
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
let userChoice
let computerChoice
let userScore = 0;
let computerScore = 0;

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

//event listeners for correct and incorrect answer to question
//corect answer (yes button) takes user to rules area
//incorrect answer (no button) runs function incorrect
yes.addEventListener('click', function() {
  questionSection.style.display = "none";
  rules.style.display = "flex"; 
});

no.addEventListener('click', incorrect);

//function inncorect to inform user answer is wrong
function incorrect() {
  questionSection.style.backgroundColor= "#fd0e35";
  wrong.style.display= "block";
  answer.style.display= "none";
  no.style.display= "none";
  question.style.display= "none";
  yes.innerHTML= "Play Game"; 
}

//event listeners for destination choice buttons
//runs functions inside event listner to move to relevant game area
savannah.addEventListener('click', function() {
    body.classList.add("savannah-add");
    body.classList.remove("meadow-add");
    body.classList.remove("forest-add");
    rules.style.display = "none";
    gameContainer.style.display= "block";

  });
forest.addEventListener('click', function() {
    body.classList.add("forest-add");
    body.classList.remove("savannah-add");
    body.classList.remove("meadow-add");
    rules.style.display = "none";
    gameContainer.style.display= "block";
  });
  meadow.addEventListener('click', function() {
    body.classList.add("meadow-add");
    body.classList.remove("savannah-add");
    body.classList.remove("forest-add");
    rules.style.display = "none";
    gameContainer.style.display= "block";
  });

//function inncorect to inform user answer is wrong
function incorrect() {
    questionSection.style.backgroundColor= "#fd0e35";
    wrong.style.display= "block";
    answer.style.display= "none";
    no.style.display= "none";
    question.style.display= "none";
    yes.innerHTML= "Play Game"; 
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
  computerImage.src = `assets/images/${computerChoice}.png`;
  computerImage.alt = `image of the animal the computer choice, which was ${computerChoice}`;
}

//function to get result and from each round and run relevant function
function getResult() {
  if (computerChoice === userChoice) {
    draw();
    result.innerHTML= "Its a draw"
 }
 if (computerChoice === 'elephant' && userChoice === 'mouse') {
    youWin();
    result.innerHTML= "Mouse scares off the Elephant" 
 }
 if (computerChoice === 'elephant' && userChoice === 'monkey') {
    computerWins();
    result.innerHTML= "Elephant squashes the Monkey"
 }
 if (computerChoice === 'mouse' && userChoice === 'monkey') {
    youWin();
    result.innerHTML= "Monkey catches the Mouse"
 }
 if (computerChoice === 'mouse' && userChoice === 'elephant') {
    computerWins();
    result.innerHTML= "Mouse scares off the Elephant"
 }
 if (computerChoice === 'monkey' && userChoice === 'elephant') {
    youWin();
    result.innerHTML= "Elephant squashes the Elephant"
 }
 if (computerChoice === 'monkey' && userChoice === 'mouse') {
    computerWins();
    result.innerHTML= "Monkey catches the Mouse"
 }
}

//draw function
function draw() {
  yourImage.classList.remove("win", "lose");
  computerImage.classList.remove("win", "lose");
}

//function if user wins
function youWin() {
  userScore++;
  yourScoreDisplay.innerHTML = userScore;
  yourImage.classList.remove("lose");
  yourImage.classList.add("win");
  computerImage.classList.add("lose");
}

//function if computer wins
function computerWins() {
  computerScore++;
  computerScoreDisplay.innerHTML = computerScore;
  computerImage.classList.remove("lose");
  computerImage.classList.add("win");
  yourImage.classList.add("lose");
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
  result.innerHTML= "Result =";
  })
}  