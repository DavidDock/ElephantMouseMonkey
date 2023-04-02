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

//all let variables needed through game loops
let userChoice
let computerChoice

//get each animal choice from array
//add event listener for each animal
//determine user choice from click
//display choice as image in html
//run functions getComputerChoice
//run function for getResult
for (let animal of animals) {
  animal.addEventListener("click", function() {
    userChoice = this.getAttribute("id");
    yourImage.src = `assets/images/${userChoice}.png`;
    yourImage.alt = `image of your animal choice, which was ${userChoice}`;
    getComputerChoice();
    getResult();
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
    rules.style.display = "none";
    gameContainer.style.display= "block";

  });
forest.addEventListener('click', function() {
    body.classList.add("forest-add");
    rules.style.display = "none";
    gameContainer.style.display= "block";
  });
  meadow.addEventListener('click', function() {
    body.classList.add("meadow-add");
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
 }
 if (computerChoice === 'elephant' && userChoice === 'mouse') {
    youWin();
 }
 if (computerChoice === 'elephant' && userChoice === 'monkey') {
    computerWins();
 }
 if (computerChoice === 'mouse' && userChoice === 'monkey') {
    youWin();
 }
 if (computerChoice === 'mouse' && userChoice === 'elephant') {
    computerWins();
 }
 if (computerChoice === 'monkey' && userChoice === 'elephant') {
    youWin();
 }
 if (computerChoice === 'monkey' && userChoice === 'mouse') {
    computerWins();
 }
}

//draw function
function draw() {
  alert("draw");
}

//function if user wins
function youWin() {
  alert("you win");
}

//function if computer wins
function computerWins() {
  alert("computer wins");
}