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

//event listeners for correct and incorrect answer to question
//corect answer (yes button) takes user to rules area
//incorrect answer (no button) runs function incorrect
yes.addEventListener('click', function() {
  questionSection.style.display = "none";
  rules.style.display = "flex"; 
});

no.addEventListener('click', incorrect);

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